import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {ZoomIn, FadeOut} from 'react-native-reanimated';

import colors from 'tailwindcss/colors';

interface CheckBoxProps extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function CheckBox({title, checked = false, ...rest}: CheckBoxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      { checked ? (
        <Animated.View 
          className="h-8 w-8 bg-green-800 rounded-lg items-center justify-center"
          entering={ZoomIn}
          exiting={FadeOut}
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg " />
      )}
      <Text className="text-white text-base ml-3">
        {title}
      </Text>
    </TouchableOpacity>
  )
}