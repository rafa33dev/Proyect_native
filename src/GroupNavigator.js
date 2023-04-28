import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import HomeScreen from './Screens/HomeScreen';
import SignInScreen from './Screens/SignInScreen';

const GroupNavigator = () => {
  const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    initialRouteName='SignIn'
    >
      <Stack.Group>
        <Stack.Screen name='Home' component={ HomeScreen }/>
        <Stack.Screen name='SignIn' component={ SignInScreen }/>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default GroupNavigator;
