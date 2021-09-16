import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

function TextInputComponent(props) {
  return (
    <View>
      <TextInput style={styles.textInput} {...props}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#1D65D1',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 10,
    height: 40,
    fontSize: 18
  }
})

export default TextInputComponent
