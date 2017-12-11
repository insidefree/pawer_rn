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
                source={require('../../assets/img/icons/navFeed/icNavFeed1_3x.png')}
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
                        { key: 'Devin', at: true, care: false },
                        { key: 'Jackson', at: false, care: true },
                        { key: 'James', at: false, care: false },
                        { key: 'Joel', at: false, care: true },
                        { key: 'John', at: true, care: false },
                        { key: 'Jillian', at: true, care: false },
                        { key: 'Jimmy', at: true, care: false },
                        { key: 'Julie', at: false, care: false },
                    ]}
                    renderItem={({ item }) => <PawCard
                        name={item.key}
                        attention={item.at}
                        care={item.care}
                    />}
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