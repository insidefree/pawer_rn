import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


export default class PawCard extends Component {
    render() {
        const { name } = this.props
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={require('../assets/img/dog.jpeg')}
                />
                <Text>{name}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: 335,
        marginRight: 20,
        marginTop: 15,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
    img: {
        height: 210,
        width: '100%',
        borderRadius: 10,
    }
})