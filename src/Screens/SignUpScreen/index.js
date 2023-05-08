import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {ButtonPrimary} from '../../Components/ButtonPrimary';
import {InputText} from '../../Components/InputText';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {ThemeContext} from '../../Context/Theme-context';
import {Button, Layout} from '@ui-kitten/components';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&´*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const themeContext = useContext(ThemeContext);

  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('confirmEmail');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Layout style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.root}>
          <Button onPress={themeContext.toggleTheme}>dark</Button>
          <Text style={styles.title}>Create an account!</Text>
          <InputText
            name="username"
            control={control}
            placeholder="Username"
            rules={{
              required: 'username is required!',
              minLength: {
                value: 3,
                message: 'Username should be at least 3 character long!',
              },
              maxLength: {
                value: 24,
                message: 'Username should be max 24 character  long!',
              },
            }}
          />
          <InputText
            name="email"
            control={control}
            placeholder="Email"
            rules={{
              required: 'Email is required',
              pattern: EMAIL_REGEX,
              message: 'Email is invalid!',
            }}
          />
          <InputText
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
            rules={{
              required: 'Password is required!',
              minLength: 8,
              message: 'Password should be minimun 8 character long!',
            }}
          />
          <InputText
            name="password-repead"
            control={control}
            placeholder="Password Repeat"
            secureTextEntry
            rules={{
              required: 'Password confirm is required',
              validate: value => value === pwd || 'Password do not match!',
            }}
          />

          <ButtonPrimary
            text="Register"
            onPress={handleSubmit(onRegisterPressed)}
          />

          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link}>Terms of Use</Text> and{' '}
            <Text style={styles.link}>Privacy policy</Text>
          </Text>

          <ButtonPrimary
            type="TERTIARY"
            text="Don't have an account? Sign In!"
            onPress={onSignInPress}
          />
        </View>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
