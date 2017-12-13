import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


export default class PawListCard extends Component {
    render() {
        console.log("******card", this.props)
        const { name, age, navigation } = this.props
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('PawListCardEntryScreen')}
            >
                <Image
                    style={styles.img}
                    source={require('../../assets/img/dog.jpeg')}
                />
                <Text style={styles.name}>
                    {name}
                </Text>
                <View style={styles.age}>
                    <Text style={styles.ageNumber}>>{age}</Text>
                    <Text style={styles.yearText}>years</Text>
                </View>
            </TouchableOpacity>
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
        top: 157,
        left: 24,
        fontSize: 32,
        fontFamily: 'CirceBold',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    age: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'ltr',
        position: 'absolute',
        top: 155,
        right: 24,
    },
    ageNumber: {
        fontSize: 24,
        fontFamily: 'CirceBold',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: -7
    },
    yearText: {
        fontSize: 14,
        fontFamily: 'Circe',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)'
    }
})