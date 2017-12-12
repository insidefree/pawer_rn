import React, { Component } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'

/* components */
import Header from '../../components/Header'
import PawListCard from '../../components/Cards/PawListCard'

export default class PawListScreen extends Component {
    static navigationOptions = {
        title: '',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/img/icons/navList/icNavList0_3x.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title={'Pawslist'}/>
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
                    renderItem={({ item }) => <PawListCard
                        name={item.key}
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
    },
    icon: {
        marginTop: 15,
        width: 32,
        height: 32,
    },
});