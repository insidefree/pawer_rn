import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

/* components */
import PawDeed from '../components/PawDeed'

export default class PawDeedContainer extends Component {
    render() {
        const { care, attention } = this.props
        return (
            <View style={styles.container}>
                <PawDeed />
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.btn}
                >
                    <Text style={styles.text}>VIEW ALL GOOD DEEDS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 130,
        flex: 1,
        borderColor: '#e9e9e9',
        borderBottomWidth: 1,

    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 44,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: '#f3f3f3',
        borderRadius: 22
    },
    text: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 14,
        fontFamily: 'CirceBold',
        color: '#ee6c4e',
        letterSpacing: 2,
        marginTop: 12
    }
})