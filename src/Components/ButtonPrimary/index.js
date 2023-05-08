import {View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'

export const ButtonPrimary = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
  return (
    <Pressable 
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${ type }`],
        bgColor ? { backgroundColor: bgColor } : {}
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${ type }`],
          fgColor ? { color: fgColor } : {}
        ]}
      >{ text }</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  container_PRIMARY: {
    backgroundColor: 'steelblue'
  },
  
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
    backgroundColor: 'white'
  },

  container_TERTIARY: {
    backgroundColor:'white',
  },

  container_FOR: {
     backgroundColor: 'rgba(255, 85, 0, 0.63)'
  },

  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },

  text_TERTIARY: {
    color:'#000'
  },

  text_SECONDARY: {
    color: '#3B71F3'
  },

})


