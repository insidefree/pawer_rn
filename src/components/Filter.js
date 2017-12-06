import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Filter extends Component {
    render() {
        return (
            <View style={styles.continer}>
                <Text>Filter</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: 50
    }
})