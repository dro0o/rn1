import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.view1Style} />
      <View style={styles.view2Style} />
      <View style={styles.view3Style} />
    </View>
  )
}

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view1Style: {
    height: 70,
    width: 90,
    borderWidth: 3,
    backgroundColor: 'red'
  },
  view2Style: {
    height: 70,
    width: 90,
    borderWidth: 3,
    backgroundColor: 'green',
    alignSelf: 'center'
  },
  view3Style: {
    height: 70,
    width: 90,
    borderWidth: 3,
    backgroundColor: 'purple'
  }
})

export default BoxScreen
