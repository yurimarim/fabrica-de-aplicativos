import React, { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {
  const buttonRef = useRef(null)

  function handleClick() {
    buttonRef.current.shake()
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animatable.Text
        style={styles.title}
        animation="pulse"
        // duration={5000}
        // iterationCount={Infinity}
      >
        Lorem Ipsum
      </Animatable.Text>

      <ButtonAnimated
        ref={buttonRef}
        onPress={handleClick}
        style={styles.button}
        animation="shake"
        // iterationCount={Infinity}
      >
        <Text style={{ color: '#fff' }}>Animar</Text>
      </ButtonAnimated>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25
  },
  button: {
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  }
})
