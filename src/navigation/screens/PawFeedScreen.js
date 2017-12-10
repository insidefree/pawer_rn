import React, { Component } from 'react'
import { View, Text, Image, FlatList, StyleSheet, StatusBar } from 'react-native'

/* components */
import Header from '../../components/Header'
import Title from '../../components/Title'
import Filter from '../../components/Filter'
import PawCard from '../../components/PawCard'

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
                <StatusBar translucent={true} />
                <Header title={'Pawfeed'} />
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <PawCard name={item.key} />}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        paddingLeft: 20,
        // paddingRight: 20,
    },
    icon: {
        marginTop: 15,
        width: 32,
        height: 32,
    }

})