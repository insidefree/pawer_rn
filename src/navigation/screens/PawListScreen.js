import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'

/* components */
import Header from '../../components/Header'
import PawListCard from '../../components/Cards/PawListCard'


/* actions */
import { fetchAnimals, selectAnimal, fetchAnimalsFirstLoad, fetchAnimalsByBatch } from '../../actions/animals'
import animals from '../../reducers/animals';


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
        this.props.fetchAnimalsFirstLoad()
    }

    handleRefresh = () => {
        this.props.fetchAnimalsFirstLoad()
    }

    handleOnEndReached = () => {
        const { animals: { animalsList }, fetchAnimalsByBatch } = this.props
        fetchAnimalsByBatch(animalsList.slice(-1)[0].id)
    }

    render() {
        const { navigation, animals: { animalsList, loading } } = this.props
        return (
            <View style={styles.container}>
                <Header title={'Pawslist'} />
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
                    onEndReached={this.handleOnEndReached}
                    onEndReachedThreshold={2}         
                    showsVerticalScrollIndicator={false}
                    onRefresh={this.handleRefresh}
                    refreshing={loading}
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