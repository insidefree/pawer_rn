import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'

/* components */
import Title from './Title'
import Filter from './Filter'

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Title title={'Pawfeed'} />
                <Filter />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingTop: Platform.OS === 'ios' ? 13 : StatusBar.currentHeight,
        maxHeight: 63,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    }
})