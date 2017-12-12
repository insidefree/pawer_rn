import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class PawListCardEntryScreen extends Component {
    static navigationOptions = {
        title: '',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/img/icons/sos/icSos0_3x.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>PawListCardEntryScreen</Text>
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