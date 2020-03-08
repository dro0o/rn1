import React, { useReducer } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const INCREMENT = 1

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload }
    case 'decrease':
      return { ...state, counter: state.counter - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {
  const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase', payload: INCREMENT })
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrease', payload: INCREMENT })
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
