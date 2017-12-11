import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class PawCare extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.icon}
                    source={require('../assets/avatar.jpeg')}
                />
                <Image
                    style={styles.subIcon}
                    source={require('../assets/img/icons/takepet/icTakepet_3x.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 44,
        width: 44,
        margin: 13,
        position: 'absolute',
        direction: 'ltr',
        right: 0,
        borderRadius: 22,
        borderColor: '#fff',
        borderWidth: 2.5
    },
    subIcon: {
        height: 20,
        width: 20,
        // margin: 13,
        position: 'absolute',
        direction: 'ltr',
        top: 40,
        right: 40,
    }
})