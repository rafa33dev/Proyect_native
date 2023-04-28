import {View, Text, ImageBackground, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AnimateText from '../../Components/AnimateText';
import CustomButton from '../../Components/CustomButton';
import {Icon} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native'


const image = {
  uri: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlb3BsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
};

const HomeScreen = () => {

  const navigation = useNavigation();

  const pressableSigin = () => {
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Welcome</Text>
        <Pressable onPress={ pressableSigin}>
          <Icon
            name="log-in-outline"
            fill="rgb(226, 135, 67)"
            style={styles.icon}
          />
        </Pressable>
        <AnimateText
          sentences={[
            '¿Ya tienes una Cuenta?',
            '! No ¡',
            'Creala Ahora mismo.',
            'Y organiza tus tareas!',
          ]}
          delay={1000}
          speed={70}
          style={styles.textContainer}
        />

        <View style={styles.btnUp}>
          <CustomButton onPress={''} text="Sign Up" type="PRIMARY" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    top: 115,
    fontSize: 34,
  },

  textContainer: {
    alignItems: 'center',
    marginTop: 140,
  },

  btnUp: {
    position: 'absolute',
    alignItems: 'center',
    width: '80%',
    bottom: 50,
  },

  icon: {
    width: 42,
    height: 42,
    right: -170,
    top: 40,
    position: 'absolute',
  },
});

export default HomeScreen;
