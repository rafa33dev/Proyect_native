import React, {useContext, useEffect, useState} from 'react';
import {SessionUserContext} from './Context/SessionUserContext'
import {AccessGroup, AuthGroup} from './Screens/Routes'
import {useGroupsNavigator} from './Hooks/useGroupsNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GroupNavigator = () => {
  const {groupNavigator, Stack} = useGroupsNavigator();
  const {userSession} = useContext(SessionUserContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!userSession && (
        <Stack.Group>{groupNavigator(Stack, AuthGroup)}</Stack.Group>
      )}

      {userSession && (
        <Stack.Group>{groupNavigator(Stack, AccessGroup)}</Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default GroupNavigator;
