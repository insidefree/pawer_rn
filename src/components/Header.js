import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

/* components */
import Title from './Title'
import Filter from './Filter'

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Title title={'Pawfeed'} style={styles.title} />
                <Filter />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30,
        maxHeight: 100,

    }
})