import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {
    render() {
        return (
            <View style={styles.continer}>
                <Text>TITLE</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})