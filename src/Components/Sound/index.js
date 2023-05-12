import {View, Text, StyleSheet} from 'react-native';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { useSounds } from '../../Hooks/useSounds';

export const Sounds = () => {
  const { audioPlay, audioStop } = useSounds()

   return (
    <View style={styles.container}>
     <Button style={styles.btnColorPlay}  onPress={audioPlay}>play</Button>
     <Button style={styles.btnColorStop} onPress={audioStop}>stop</Button>
    </View>
   )
};

const styles = StyleSheet.create({
  container: {
    width: 210,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnColorPlay: {
    backgroundColor: 'steelblue',
    width: 100
  },

  btnColorStop: {
    backgroundColor: 'green',
    color:'blue',
    width: 100
  }
})