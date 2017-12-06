import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class SosScreen extends Component {
    static navigationOptions = {
        title: '',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/help.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SOS screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        marginTop: 15,
        width: 32,
        height: 32,
    },
});