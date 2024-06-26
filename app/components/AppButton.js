import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function AppButton({title, onPress, color = "primary"}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 5,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        alignItems: "center",
        fontWeight: "bold",
    }
})