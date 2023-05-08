import {View, Text, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'

export const AnimateText = ({sentences, delay, speed, style}) => {
  const [animateText, setAnimateText] = useState('')
  const [currentSetenceIndex, setCurrentSentenceIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (sentences.length !== currentSetenceIndex) {
      startTypingAnimation()
    } else {
      setCurrentSentenceIndex(0)
    }
  }, [currentSetenceIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prevState => !prevState)
    }, 500)

    return () => {
      clearInterval(cursorInterval)
    };
  }, []);

  const startTypingAnimation = () => {
    const currentSentence = sentences[currentSetenceIndex]
    let index = 0

    const typingInterval = setInterval(() => {
      setAnimateText(prevState => prevState + currentSentence[index])
      index++

      if (index === currentSentence.length) {
        clearInterval(typingInterval)

        setTimeout(() => {
          setCurrentSentenceIndex(prevState => prevState + 1)
          setAnimateText('')
        }, delay)
      }
    }, speed)
  };

  return (
    <View style={style}>
      <Text style={styles.text}>{animateText}</Text>
      {showCursor && <Text style={styles.cursor}></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    marginBottom: 10,
    backgroundColor: 'rgb(226, 135, 67)',
    color: '#fff',
    padding: 7,
  },

  cursor: {
    fontSize: 18,
    marginBottom: 10,
    opacity: 0.6,
    position: 'absolute',
    right: -5,
    color: '#fff',
  },
})


