import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  ContainerStatusBar,
  Container,
  Title,
  Name,
  TestButton,
  ButtonText
} from './src/styles/styles'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ContainerStatusBar>
        <Title color="#fff" size="20">
          Espaçamento obtido getStatusBarHeight
        </Title>
      </ContainerStatusBar>
      <Container>
        <Title color="#a2a2a2" size="30">
          Styled Components
        </Title>
        <Name size="20">Hello Yuri!</Name>

        <TestButton onPress={() => alert('Clicou!')}>
          <ButtonText>Entrar</ButtonText>
        </TestButton>
      </Container>
    </>
  )
}
