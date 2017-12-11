import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class PawDeed extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={require('../assets/avatar.jpeg')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}><Text style={styles.name}>Joseph</Text> gave <Text style={styles.name}>Ricardo</Text> 15 bones</Text>
                    <Text style={styles.time}>2 HOURS AGO</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 20,
        marginBottom: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 40,
        marginLeft: 16
    },
    text: {
        fontFamily: 'Circe',
        fontSize: 17
    },
    img: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    name: {
        color: '#633ae9'
    },
    time: {
        // marginLeft: 25,
        // marginTop: 10,
        // marginRight: 25,
        fontFamily: 'CirceBold',
        color: '#0B0B0B',
        fontSize: 12,
        opacity: 0.55,
        letterSpacing: 1,
        // lineHeight: 17
    },
})