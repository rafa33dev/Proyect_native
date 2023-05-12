import React, { useEffect, useState } from 'react'
import RNFS from 'react-native-fs';
import { useRecordSounds } from './useRecordSounds';

export  const useAudios = () => {
    const [audioPath, setAudioPath] = useState('');
    const [audioFiles, setAudioFiles] = useState([]);
    
    const {DOCUMENTS_PATH} = useRecordSounds()
    
    useEffect(() => {
      const fetchAudioFiles = async () => {
        try {
          const files = await RNFS.readDir(audioPath)
          setAudioFiles(`file://${files[1]?.path}`); 
        // console.log(`file://${files[1]?.path}`);
        } catch (error) {
          console.log('Error fetching audio files:', error);
        }
      };

      if (audioPath) {
        fetchAudioFiles();
      }
      
  
    }, [audioPath]);
  
    useEffect(()=>{
        setAudioPath(DOCUMENTS_PATH);
        
    },[])
  
    return {
        audioFiles  
    }
}
