import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
import { Button } from '@ui-kitten/components';
import { useRecordSounds } from '../../Hooks/useRecordSounds';
import { useAudios } from "../../Hooks/useAudios";

export const RecordSounds = () => {
  const {isRecording, stopRecording, startRecording, saveRecording} = useRecordSounds()
  

 
  return (
    <View style={styles.container}>
      {isRecording ? (
        <Button style={styles.btn} onPress={stopRecording}>start</Button>
      ) : (
        <Button style={[styles.btn,[styles.btnStart]]} onPress={startRecording}>stop</Button>
      )}
      <Button style={styles.btn} onPress={saveRecording}>save</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  btn: {
    width: 100
  },

  btnStart:{
   backgroundColor: 'green'          
  },
   btnStop: {

   },

   btnSave: {

   }
})
