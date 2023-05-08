import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeUserScreen from '../../Screens/HomeUserScreen';
import {Layout} from '@ui-kitten/components';

export const LisTacks = ({data}) => {
  return (
   
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Text style={styles.textList}>{item.name}</Text>
          )}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 'auto',
    top: 130,
    maxHeight: 500,
  },

  list: {
    width: '100%',
  },

  textList: {
    marginVertical: 10,
    backgroundColor: 'rgba(0, 0, 53, 0.110)',
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
  },
});
