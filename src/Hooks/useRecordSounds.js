import React, {useEffect, useState} from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {usePermissionAdroid} from './useAudios';
import RNFS from 'react-native-fs'

const audioRecorderPlayer = new AudioRecorderPlayer();
const DOCUMENTS_PATH = RNFS.DocumentDirectoryPath;

export const useRecordSounds = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPath, setAudioPath] = useState('');
  
  
  const startRecording = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    console.log('Recording started:', result);
    setIsRecording(true);
  };
  

  console.log('mi ruuuuuutaaaa',audioPath); 

  const stopRecording = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    console.log('Recording stopped:', result);
    setIsRecording(false);
    setAudioPath(result);
  };
  
  const saveRecording = async () => {
    if (audioPath) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().replace(/[:.]/g, '');
      const fileName = `audio${formattedDate}.mp3`;
      const destinationPath = `${DOCUMENTS_PATH}/shasky_${fileName}`;
      try {
        await RNFS.copyFile(audioPath, destinationPath);
        console.log('Audio saved:', destinationPath);
      } catch (error) {
        console.log('Error saving audio:', error);
      }
    }
  };

  return {
    startRecording,
    stopRecording,
    saveRecording,
    isRecording,
    DOCUMENTS_PATH
  }

};
