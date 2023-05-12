import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {SessionUserContext} from '../../Context/SessionUserContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TaksUser} from '../../utils/Task';
import {LisTacks} from '../../Components/ListTacks';
import {Button, Layout} from '@ui-kitten/components';
import {ThemeContext} from '../../Context/Theme-context';
import { ButtonPrimary } from '../../Components/ButtonPrimary';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Sounds } from '../../Components/Sound';
import { RecordSounds } from '../../Components/RecordSounds'


const ProfileScreen = () => {

  const themeContext = useContext(ThemeContext);
  const {userSession, setUserSession} = useContext(SessionUserContext);
  const subName = userSession?.name?.split(' ');
  
  return (
    <Layout style={{flex: 1}}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgba(8,209,240,0.09987745098039214)',
        }}>

        <ButtonPrimary text='salir' onPress={()=> {AsyncStorage.removeItem('isLoggedIn'); setUserSession({})}}/>

       <RecordSounds />
        {/* <Button onPress={themeContext.toggleTheme}>click</Button> */}
       <Sounds/>
        <View style={styles.container}>
          <Image
            source={require('../../Assets/Img/fondo1.png')}
            style={styles.img}
          />
          {/* <Text style={styles.name}>{subName[0] + ' ' + subName[1]}</Text> */}
        </View>
        <Pressable
          onPress={() => {
            console.log('hola');
          }}
          style={styles.icon}>
          <FontAwesomeIcon icon="fa-regular fa-bell" size={30} />
          <Text style={styles.textTask}>{TaksUser.length}</Text>
        </Pressable>
        <Text style={styles.titleTask}>Task</Text>

        <LisTacks data={TaksUser} />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    top: 40,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  name: {
    textAlign: 'center',
    width: 130,
    left: -16,
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  icon: {
    right: -160,
    top: -85,
  },

  textTask: {
    position: 'absolute',
    left: 20,
    top: -10,
    color: 'red',
    fontSize: 15,
  },

  titleTask: {
    top: 70,
    fontSize: 25,
    letterSpacing: 2,
  },
});

export default ProfileScreen;
