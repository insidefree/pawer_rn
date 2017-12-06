import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {
    render() {
        const { title } = this.props
        return (
            <View style={styles.continer}>
                <Text>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 200
    }
})