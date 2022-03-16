import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const ContainerStatusBar = styled.View`
  background-color: #212121;
  /* se colocar true, na função.. só vai pegar o valor, nos dispositivos IOS. */
  padding-top: ${0 + getStatusBarHeight()}
  justify-content: center;
  align-items: center;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #181818;
`

export const Title = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
`

export const Name = styled.Text`
  color: #fff;
  font-size: ${props => props.size}px;
`

export const TestButton = styled.TouchableOpacity`
  width: 90%;
  background-color: #ddd;
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: #000;
  font-size: 20px;
`
