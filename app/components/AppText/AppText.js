import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}