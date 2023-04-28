import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CustomInput from '../../Components/CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../Components/CustomButton';

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../Assets/Img/img8.jpg')}
        resizeMode="cover"
        style={styles.image}>
          <Text style={ styles.title }>Organize your tasks!</Text>
       <View style={styles.containerInput}>
       <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          secureTextEntryxz
          rules={{}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
        />
        <CustomButton 
          text='Sing In'
          type='FOR'
        />
       </View>
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
    alignItems: 'center'

  },

  containerInput: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 2
  },

  title:{
    fontSize: 40,
    top: 90,
    color: 'white'
  }
});

export default SignInScreen;
