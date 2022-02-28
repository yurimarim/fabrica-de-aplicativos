import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const widAnimated = useRef(new Animated.Value(150)).current
  const heiAnimated = useRef(new Animated.Value(50)).current
  const bordAnimated = useRef(new Animated.Value(0)).current
  // const opacityAnimated = useRef(new Animated.Value(0)).current
  const textAnimated = useRef(new Animated.Value(22)).current

  useEffect(() => {
    /* ANIMAÇÃO - PARALLEL: */
    // Animated.parallel([
    //   Animated.timing(widAnimated, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(heiAnimated, {
    //     toValue: 150,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(bordAnimated, {
    //     toValue: 50,
    //     duration: 1000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(opacityAnimated, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false
    //   })
    // ]).start()
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    /* ANIMAÇÃO - SEQUENCE: */
    // Animated.sequence([
    //   Animated.timing(widAnimated, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(heiAnimated, {
    //     toValue: 200,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(bordAnimated, {
    //     toValue: 30,
    //     duration: 1500,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(opacityAnimated, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false
    //   })
    // ]).start()
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    /* ANIMAÇÃO - MISTURANDO PARALLEL & SEQUENCE */
    // Animated.sequence([
    //   Animated.timing(opacityAnimated, {
    //     toValue: 1,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.parallel([
    //     Animated.timing(widAnimated, {
    //       toValue: 300,
    //       duration: 2000,
    //       useNativeDriver: false
    //     }),
    //     Animated.timing(heiAnimated, {
    //       toValue: 300,
    //       duration: 2000,
    //       useNativeDriver: false
    //     }),
    //     Animated.timing(bordAnimated, {
    //       toValue: 5,
    //       duration: 1000,
    //       useNativeDriver: false
    //     })
    //   ]),
    //   Animated.timing(textAnimated, {
    //     toValue: 30,
    //     duration: 1000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(opacityAnimated, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false
    //   })
    // ]).start()
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Animated.loop(
      Animated.sequence([
        Animated.timing(widAnimated, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(widAnimated, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View
        style={{
          width: widAnimated,
          height: heiAnimated,
          borderRadius: bordAnimated,
          backgroundColor: '#4169e1',
          justifyContent: 'center'
          // opacity: opacityAnimated,
        }}
      >
        <Animated.Text
          style={{ textAlign: 'center', fontSize: textAnimated, color: '#fff' }}
        >
          Carregando...
        </Animated.Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
