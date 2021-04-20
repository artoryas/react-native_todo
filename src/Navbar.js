import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Navbar = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
              { title }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#17a2b8',
        height: 100
    },
    text:{
        color: 'white',
        fontSize: 20,
        paddingBottom: 20
    }
})