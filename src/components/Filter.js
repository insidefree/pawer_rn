import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class Filter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('filter')}
                    underlayColor='green'
                >
                    <Image
                        style={styles.button}
                        source={require('../assets/img/icons/filter/icFilter_3x.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: 50
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 32,
        maxWidth: 32,
    }
})