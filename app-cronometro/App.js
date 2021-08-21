import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { set } from 'react-native-reanimated'

let timer = null
let seconds = 0
let minutes = 0
let hours = 0

export default function App() {
  const [number, setNumber] = useState()
  const [button, setButton] = useState('START')
  const [last, setLast] = useState(null)

  function start() {
    if (timer != null) {
      // Stop timer
      clearInterval(timer)
      timer = null

      setButton('START')
    } else {
      // Start timer
      timer = setInterval(() => {
        seconds++

        if (seconds == 60) {
          seconds = 0
          minutes++
        }

        if (minutes == 60) {
          minutes = 0
          hours++
        }

        let format =
          (hours < 10 ? '0' + hours : hours) +
          ':' +
          (minutes < 10 ? '0' + minutes : minutes) +
          ':' +
          (seconds < 10 ? '0' + seconds : seconds)

        setNumber(format)
      }, 1000)

      setButton('STOP')
    }
  }

  function stop() {
    if (timer != null) {
      // Stop timer
      clearInterval(timer)
      timer = null
    }

    setLast(number)
    setNumber()
    seconds = 0
    minutes = 0
    hours = 0

    setButton('START')
  }

  return (
    <View style={styles.container}>
      <Image source={require('./src/img/crono.png')} />
      <Text style={styles.timer}> {number} </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnTexto}> {button} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={stop}>
          <Text style={styles.btnTexto}>RESET</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {last ? `Último tempo: ${last}` : null}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 20
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40
  },
  textoCorrida: {
    fontSize: 23,
    color: '#fff',
    fontStyle: 'italic'
  }
})
