import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {NavigationContainer} from '@react-navigation/native'
import GroupNavigator from './src/GroupNavigator'
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import React, {useState} from 'react'
import {SessionUserContextProvider} from './src/Context/SessionUserContext'
import {NativeBaseProvider} from 'native-base'
import {ThemeContext} from './src/Context/Theme-context'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-regular-svg-icons';



library.add(faBell)


const client = new ApolloClient({
  uri: 'http://10.2.20.119:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme);
  };

  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ApplicationProvider {...eva} theme={eva[theme]}>
              <IconRegistry icons={EvaIconsPack} />
              <SessionUserContextProvider>
                <NativeBaseProvider>  
                  <GroupNavigator />
                </NativeBaseProvider>
              </SessionUserContextProvider>
            </ApplicationProvider>
          </ThemeContext.Provider>
        </NavigationContainer>
      </ApolloProvider>
    </>
  )
}

export default App

