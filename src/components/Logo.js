import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Logo() {
  return <Icon
  name="user"
  style={{color: '#fff', fontSize: 40, marginBottom: 30}}
/>
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
