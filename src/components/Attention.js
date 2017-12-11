import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'


export default class Ateention extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.icon}
                    source={require('../assets/img/icons/attention/icAttention_3x.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 40,
        width: 40,
        margin: 13,
        position: 'absolute',
        direction: 'ltr',
        right: 0
    }
})