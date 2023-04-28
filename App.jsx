import {View, Text, StyleSheet} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import GroupNavigator from './src/GroupNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';

const client = new ApolloClient({
  uri: 'http://10.2.20.119:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
 
  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <ApplicationProvider {...eva}  theme={eva.light}>
            <IconRegistry icons={EvaIconsPack} />
            <GroupNavigator />
          </ApplicationProvider>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
};

export default App;
