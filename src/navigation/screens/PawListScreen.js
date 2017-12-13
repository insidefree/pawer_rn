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
        console.log("******list", this.props.navigation)
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header title={'Pawslist'} />
                <FlatList
                    data={[
                        { key: 'Devin', at: true, care: false, age: 2 },
                        { key: 'Jackson', at: false, care: true, age: 3 },
                        { key: 'James', at: false, care: false, age: 1 },
                        { key: 'Joel', at: false, care: true, age: 0.6 },
                        { key: 'John', at: true, care: false, age: 1 },
                        { key: 'Jillian', at: true, care: false, age: 3 },
                        { key: 'Jimmy', at: true, care: false, age: 1 },
                        { key: 'Julie', at: false, care: false, age: 2 },
                    ]}
                    renderItem={({ item }) => <PawListCard
                        name={item.key}
                        age={item.age}
                        navigation={navigation}
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