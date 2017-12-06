import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

/* components */
import Header from '../../components/Header'
import Title from '../../components/Title'
import Filter from '../../components/Filter'


export default class PawFeedScreen extends Component {
    static navigationOptions = {
        title: '',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/menu.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title={'Pawfeed'} />

                <Text style={styles.text}>PawFeed first page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        marginTop: 15,
        width: 32,
        height: 32,
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
})