import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


export default class PawListCard extends Component {
    render() {
        const { name, year } = this.props
        return (
            <View style={styles.container}>

                <Image
                    style={styles.img}
                    source={require('../../assets/img/dog.jpeg')}
                />
                <Text style={styles.name}>
                    {name}
                </Text>
                <View style={styles.year}>
                    <Text style={styles.yearNumber}>~2</Text>
                    <Text style={styles.yearText}>years</Text>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        minHeight: 220,
        marginRight: 20,
        marginTop: 15,
        backgroundColor: '#f3f3f3',
        borderRadius: 20,
        overflow: 'hidden'
    },
    img: {
        height: 220,
        width: '100%',
        position: 'absolute'
    },
    name: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 158,
        left: 24,
        fontSize: 32,
        fontFamily: 'CirceBold',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    year: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'ltr',
        position: 'absolute',
        top: 157,
        right: 24,
        width: 40
    },
    yearNumber: {
        fontSize: 24,
        fontFamily: 'CirceBold',
        lineHeight: -10,
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    yearText: {
        position: 'absolute',
        top: 25,
        fontSize: 14,
        fontFamily: 'Circe',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)'
    }
})