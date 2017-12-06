import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

/* components */
import Title from '../../components/Title'

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
                <View style={styles.header}>
                    <Title  />
                    <Title  />
                </View>

                <Text>PawFeed first page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        marginTop: 15,
        width: 32,
        height: 32,
    },
    header: {
        height: 30
    }
});