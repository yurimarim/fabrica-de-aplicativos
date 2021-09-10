import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

function TextInputComponent(props) {
  return (
    <View>
      <TextInput style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ff0000',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#0000ff',
    margin: 20
  }
})

export default TextInputComponent
