import { useEffect, useState } from "react";
import { ScrollView, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components/Header";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";

import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";
import { api } from "../lib/axios";
import { Loading } from "../components/Loading";
import dayjs from "dayjs";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const dateFromYearsStart = generateRangeDatesFromYearStart();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - dateFromYearsStart.length;

type summaryProps = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export function Home() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<summaryProps | null>(null);

  const { navigate } = useNavigation();

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get('summary');
      setSummary(response.data)
    } catch (error) {
      console.log(error);
      Alert.alert('Atenção', 'Não foi possível carregar o sumário de hábitos.')
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {fetchData()}, []);

  if(loading) return <Loading />
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((weekDay, index) => (
            <Text 
              key={`${weekDay}-${index}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{width: DAY_SIZE}}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        <View className="flex-row flex-wrap">
          {
            summary &&
            dateFromYearsStart.map((date) => {
              const dayWithHabits = summary.find(day => {
                return dayjs(date).isSame(day.date, 'day')
              });

              return (
                <HabitDay
                  key={date.toString()}
                  date={date}
                  amountOfHabits={dayWithHabits?.amount}
                  amountCompleted={dayWithHabits?.completed}
                  onPress={() => navigate('Habit', { date: date.toISOString() })}
                />
              )
            })
          }
          {
            amountOfDaysToFill > 0 && Array
            .from({ length: amountOfDaysToFill })
            .map((_, index) => (
              <View
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{width: DAY_SIZE, height: DAY_SIZE}}
                key={index}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}