import React from 'react'

import RNPickerSelection from 'react-native-picker-select'

export default function Picker({ coins, onChange }) {
  const placeholder = {
    label: 'Selecione uma moeda...',
    value: null,
    color: '#000'
  }

  return (
    <RNPickerSelection
      placeholder={placeholder}
      items={coins}
      onValueChange={value => onChange(value)}
      style={{
        inputIOS: {
          fontSize: 20,
          color: '#000'
        },
        inputAndroid: {
          fontSize: 20,
          color: '#000'
        }
      }}
    />
  )
}
