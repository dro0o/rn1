import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'friend1', age: 20 },
    { name: 'friend2', age: 30 },
    { name: 'friend3', age: 40 },
    { name: 'friend4', age: 50 },
    { name: 'friend5', age: 60 },
    { name: 'friend6', age: 70 },
    { name: 'friend7', age: 80 },
    { name: 'friend8', age: 90 },
    { name: 'friend9', age: 100 }
  ]

  return (
    <FlatList
      horizontal
      showsHorizontalScrollInidcator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    fontSize: 30
  }
})

export default ListScreen
