import {View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import {Controller} from 'react-hook-form'

export const InputText = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={{width: '100%'}}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.container,
                {borderColor: error ? 'red' : '#e8e8e8'},
              ]}>
              <TextInput
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                style={styles.input}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && (
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'stretch',
                  fontSize: 18,
                  backgroundColor: 'rgba(255, 85, 0, 0.63)',
                  padding: 10,
                  marginBottom: 15,
                }}>
                {error.message || 'Error'}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(250, 255, 255, 0.63)',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
  },

  input: {
    padding: 11,
    fontSize: 20,
  },
});
