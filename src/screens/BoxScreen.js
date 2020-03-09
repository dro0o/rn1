import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}>Child #1 </Text>
      <Text style={styles.text2Style}>Child #2 </Text>
      <Text style={styles.text3Style}>Child #3 </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    alignItems: 'center'
    // flexDirection: 'row'
  },
  text1Style: {
    borderWidth: 3,
    borderColor: 'red'
  },
  text2Style: {
    borderWidth: 3,
    borderColor: 'blue',
    alignSelf: 'stretch'
  },
  text3Style: {
    borderWidth: 3,
    borderColor: 'green'
  }
})

export default BoxScreen
