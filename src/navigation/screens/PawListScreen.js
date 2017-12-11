import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


export default class PawListScreen extends Component {
    static navigationOptions = {
        title: '',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/img/icons/navList/icNavList0_3x.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>List of animals</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginTop: 15,
        width: 32,
        height: 32,
    },
});