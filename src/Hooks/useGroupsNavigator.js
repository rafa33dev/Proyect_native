import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export const useGroupsNavigator = () => {
  const Stack = createNativeStackNavigator()

  const groupNavigator = (Stack, Group) => {
    return Object.keys(Group).map((nameScreen, nameScreenIndex) => {
      return (
        <Stack.Screen
          key={nameScreenIndex}
          name={nameScreen}
          component={Group[nameScreen].component}
        />
      )
    })
  }

  return {
    groupNavigator,
    Stack,
  };
};
