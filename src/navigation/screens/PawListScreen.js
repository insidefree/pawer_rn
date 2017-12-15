import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native'

/* components */
import Header from '../../components/Header'
import PawListCard from '../../components/Cards/PawListCard'


/* actions */
import { fetchAnimals, selectAnimal, fetchAnimalsFirstLoad, fetchAnimalsByBatch } from '../../actions/animals'


export class PawListScreen extends Component {
    static navigationOptions = {
        title: '',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/img/icons/navList/icNavList0_3x.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }
    componentDidMount() {
        // this.props.fetchAnimals()
        this.props.fetchAnimalsFirstLoad()
    }
    render() {
        // console.log("PawListScreen*props", this.props)
        const { navigation, animals: { animalsList, lastKnownAnimal } } = this.props
        // console.log('animalsListByBatch', fetchAnimalsByBatchFirstLoad)
        console.log('lastKnownAnimal', lastKnownAnimal)
        return (
            <View style={styles.container}>
                <Header title={'Pawslist'} />
                <Button title='add' onPress={() => { this.props.fetchAnimalsByBatch(lastKnownAnimal.id) }} />
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={animalsList}
                    renderItem={({ item }) => <PawListCard
                        id={item.id}
                        name={item.name}
                        age={item.age.num[0]}
                        images={item.images}
                        navigation={navigation}
                        onSelect={this.props.selectAnimal}
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
})

mapStateToProps = state => ({
    animals: state.animals,
})

mapDispatchToProps = dispatch => ({
    fetchAnimals: bindActionCreators(fetchAnimals, dispatch),
    selectAnimal: bindActionCreators(selectAnimal, dispatch),
    fetchAnimalsFirstLoad: bindActionCreators(fetchAnimalsFirstLoad, dispatch),
    fetchAnimalsByBatch: bindActionCreators(fetchAnimalsByBatch, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PawListScreen)