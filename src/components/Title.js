import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {
    render() {
        const { title } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: 135,
        marginLeft: -2
    },
    text: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'flex-start',
        fontFamily: 'Baloo',
        fontSize: 32,
        color: '#0B0B0B',
        paddingTop: 6,
    }
})