import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import React, {useContext, useState } from 'react'
import {ButtonPrimary} from '../../Components/ButtonPrimary'
import {InputText} from '../../Components/InputText';
import {useNavigation, useRoute} from '@react-navigation/native'
import {useForm} from 'react-hook-form'
import {SessionUserContext} from '../../Context/SessionUserContext'

const ConfirmEmailScreen = () => {
  const route = useRoute()
  const {setUserSession} = useContext(SessionUserContext)
  const [userData, setUserData] = useState({})

  const {control, handleSubmit, watch} = useForm({
    defaultValues: {email: route?.params?.email},
  });

  const navigation = useNavigation();
  const email = watch('email')
  const onConfirmPressed = () => {
    console.log(control._defaultValues.email)
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Email</Text>
        <View style={styles.containerForm}>
          <InputText
            name="email"
            control={control}
            placeholder="Email"
            rules={{
              required: 'Email code is required',
            }}
          />

          <InputText
            name="code"
            control={control}
            placeholder="Enter your confirmation code"
            rules={{
              required: 'Confimation code is required!',
            }}
          />

          <ButtonPrimary text="Confirm"  onPress={handleSubmit(onConfirmPressed)}/>
          <ButtonPrimary type="SECONDARY" text="Resend Code" />
          <ButtonPrimary type="TERTIARY" text="Back to Sing In?" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginTop: 10,
  },

  containerForm: {
    width: '100%',
    marginTop: 20,
    height: 400,
    justifyContent: 'space-around'
  }
});

export default ConfirmEmailScreen
