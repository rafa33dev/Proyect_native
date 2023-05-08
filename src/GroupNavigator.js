import React, {useContext} from 'react';
import {SessionUserContext} from './Context/SessionUserContext'
import {AccessGroup, AuthGroup} from './Screens/Routes'
import {useGroupsNavigator} from './Hooks/useGroupsNavigator'

const GroupNavigator = () => {
  const {groupNavigator, Stack} = useGroupsNavigator();
  const {userSession} = useContext(SessionUserContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!userSession?.id && (
        <Stack.Group>{groupNavigator(Stack, AuthGroup)}</Stack.Group>
      )}

      {userSession?.id && (
        <Stack.Group>{groupNavigator(Stack, AccessGroup)}</Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default GroupNavigator;
