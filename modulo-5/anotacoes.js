// // ---------ANOTAÇÃO PARA ESTUDO---------
// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// // Componente em forma de FUNCTION && forma de CLASS.
// // Dentro de um componente precisa de um return();.

// // COMPONENTE EM FORMA DE FUNCTION:
// // export default function App() {
// // return (
// // <View>
// // <Text>Olá mundo</Text>
// // </View>
// // );
// // }
// // export default App;

// // COMPONENTE EM FORMA DE CLASS:
// export default class App extends Component {
// render() {
// return (
// <View>
// <Text>Olá Mundo!</Text>
// <Text>Meu Primeiro App!</Text>
// </View>
// );
// }
// }
// // export default App;
// // ---------ANOTAÇÃO PARA ESTUDO---------

import React from 'react'
import { View, Text } from 'react-native'

function App() {
  return (
    // caso o flexDirection esteja como 'row':
    // justifyContent altera eixo horizontal(row) e alignItems eixo vertical(column)
    // caso o flexDirection esteja como 'column':
    // inverte, o justifyContent altera o eixo vertical(column) e o alignItems eixo horizontal(row)
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
      }}
    >
      <View
        style={{ height: 50, width: 100, backgroundColor: '#121212' }}
      ></View>
      <View style={{ height: 50, backgroundColor: 'red' }}></View>
      <View style={{ height: 50, backgroundColor: 'green' }}></View>
    </View>
  )
}

export default App
// export default App; exportar no final da function
