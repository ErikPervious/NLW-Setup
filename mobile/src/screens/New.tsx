import { useState } from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../components/BackButton';
import { CheckBox } from '../components/CheckBox';

import { api } from '../lib/axios';

import colors from 'tailwindcss/colors';

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [title, setTitle] = useState('');

  function handleToggleWeekDay(weekDayIndex: number) {
    if(weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay != weekDayIndex));
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  async function handleCreateNewHabit() {
    try {
      if(!title.trim() || weekDays.length === 0) {
        Alert.alert('Novo hábito', 'Informe o nome do hábito e os dias!');
        return;
      };

      await api.post('/habits', {
        title, weekDays
      });

      setTitle('');
      setWeekDays([]);

      Alert.alert('Novo hábito', 'Hábito criado com sucesso!');
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possível criar um novo hábito.')
    }
  };

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl" >
          Criar hábito
        </Text>
        <Text className="mt-6 text-zinc-400 font-semibold text-base" >
          Qual seu comprometimento?
        </Text>
        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          value={title}
          onChangeText={setTitle}
        />
        <Text className="font-semibold mt-4 mb-3 text-zinc-400 text-base">
          Qual a recorrência?
        </Text>
        {availableWeekDays.map((weekDay, index) => (
          <CheckBox
            key={`${weekDay}-${index}`}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}
        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          activeOpacity={0.7}
          onPress={handleCreateNewHabit}
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}