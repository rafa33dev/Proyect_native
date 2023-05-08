import {
  View,
  Text,
  StyleSheet,
  ImageBackground

} from 'react-native';
import { Pressable } from 'native-base';
import React, {useEffect, useState, useContext} from 'react';
import {InputText} from '../../Components/InputText';
import {useForm} from 'react-hook-form';
import {ButtonPrimary} from '../../Components/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';
import {useSignInScreen} from '../../Hooks/useSignInScreen';
import {SessionUserContext} from '../../Context/SessionUserContext';
import {Icon} from '@ui-kitten/components'

const SignInScreen = () => {
  const navigation = useNavigation()
  const [userData, setUserData] = useState({})
  const [dataErrors, setDataErrors] = useState('')
  const {loading, error, data} = useSignInScreen(userData)
  const {userSession, setUserSession} = useContext(SessionUserContext)
  
  
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    if (data) {
      if (data.userLogin) {
        setUserSession(data.userLogin)       
      } else {
        setDataErrors('wrong email or password')
      }
    }
  }, [data]);

  useEffect(() => {
    console.log('SESS---->>', userSession)
  }, [userSession])

  const onCreateAccount = () => {
    navigation.navigate('SignUp');
  };

  const onPressableHome = () => {
    setUserSession({});
   navigation.navigate('home');
  
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../Assets/Img/img8.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>Organize your tasks!</Text>
        <Pressable onPress={() => navigation.navigate('home')} style= {styles.containerIcons}>
          <Icon
            name="log-in-outline"
            fill="rgb(226, 135, 67)"
            style={styles.icon}
          />
        </Pressable>
        <View style={styles.containerInput}>
          <InputText
            name="email"
            placeholder="Email"
            control={control}
            secureTextEntryxz
            rules={{required: 'email is required'}}
          />

          <InputText
            name="password"
            placeholder="Password"
            control={control}
            secureTextEntry={true}
            rules={{
              required: 'password is required',
              minLength: {
                value: 3,
                message: 'Password should be  minimun 3 character long',
              },
            }}
          />
          <ButtonPrimary
            text="Sing In"
            type="FOR"
            onPress={handleSubmit(setUserData)}
          />
        </View>

        {dataErrors ? (
          <Text style={styles.errorText}>{dataErrors}</Text>
        ) : (
          <View style={styles.btnCreate}>
            <ButtonPrimary
              type="TERTIARY"
              text="Don't have an account? Create one"
              onPress={onCreateAccount}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },

  containerInput: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 2,
  },

  title: {
    fontSize: 40,
    top: 90,
    color: 'white',
  },

  errorText: {
    position: 'absolute',
    bottom: 70,
    color: '#fff',
    fontSize: 18,
    backgroundColor: 'rgba(255, 85, 0, 0.63)',
    padding: 10,
  },

  btnCreate: {
    position: 'absolute',
    bottom: 70,
    width: '90%',
  },

  containerIcons: {
    top: 150,
    zIndex:1
  },

  icon: {
    width: 45,
    height: 45,
  },
});

export default SignInScreen;
