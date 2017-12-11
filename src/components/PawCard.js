import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

/* components */
import PawStatus from './PawStatus'

export default class PawCard extends Component {
    render() {
        const { name, attention, care } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.imgWrap}>
                    <Image
                        style={styles.img}
                        source={require('../assets/img/dog.jpeg')}
                    />
                    <PawStatus 
                        care={care}
                        attention={attention}
                    />
                    
                </View>

                <Text style={styles.desc}>
                    <Text style={styles.name}>{name}</Text> puppy Jimmy  lost on the beach  of pensioners
                </Text>
                <Text style={styles.time}>2 HOURS AGO</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        minHeight: 335,
        marginRight: 20,
        marginTop: 15,
        backgroundColor: '#f3f3f3',
        borderRadius: 20,
        overflow: 'hidden'
    },
    img: {
        height: 210,
        width: '100%',
        position: 'absolute'
    },
    imgWrap: {
        height: 210,
        width: '100%',
    },
    desc: {
        marginLeft: 25,
        marginTop: 15,
        marginRight: 25,
        paddingTop: 2,
        fontSize: 21,
        fontFamily: 'Circe',
        color: '#0B0B0B',
        fontWeight: 'bold',
        lineHeight: 25,
    },
    time: {
        marginLeft: 25,
        marginTop: 10,
        marginRight: 25,
        fontFamily: 'CirceBold',
        color: '#0B0B0B',
        fontSize: 12,
        // fontWeight: 'bold',
        opacity: 0.55,
        letterSpacing: 1,
        lineHeight: 17
    },
    name: {
        fontSize: 21,
        color: '#633ae9',
        fontFamily: 'CirceBold'
    }
})