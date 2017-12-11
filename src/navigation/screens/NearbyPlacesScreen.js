import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class NearbyPlacesScreen extends Component {
    static navigationOptions = {
        title: '',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/img/icons/navPlaces/icNavPlaces0_3x.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Nearby Places</Text>
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