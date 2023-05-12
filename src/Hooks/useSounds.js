import React, {useState, useEffect} from "react";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { useAudios } from "./useAudios";

export const useSounds = () => {
  const [ audio, setAudio ] = useState(null)
  const [ audioPath, setAudioPatch ] = useState('')
  
  const{audioFiles} = useAudios()

  

  useEffect(() => {
    //creo la instancia de AudioRecorderPlayer
    const  audioPlayer = new AudioRecorderPlayer() 
    setAudio(audioPlayer)
    
    return () => {
      // limpio la instancia de AudioRecorderPlayer cuando se desmonte en componente
      audioPlayer.stopPlayer()
      setAudio(null)
    }

  },[])


  const audioPlay = async () => {
    setAudioPatch(audioFiles)

    if ( audio && audioPath) {
      try {
        await audio.startPlayer(audioPath)
      } catch (error) {
        console.log('Error al reproducir el adio', error)
      }
    }
  }

  const audioStop = async () => {
    if ( audio ) {
      try {
        await audio.stopPlayer()
      } catch (error) {
        console.log('Error al detener el adio ', error);
      }
    }
  }

  return {
    audioPlay,
    audioStop
  }
};


