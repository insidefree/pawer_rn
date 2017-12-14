import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'


/* components */
import PawDeed from '../../components/PawDeed'

export default class PawListCard extends Component {
    render() {
        // console.log('PawListCardt', this.props)
        const { name, age, animal } = this.props
        return (
            <ScrollView style={styles.container}>
                <Image
                    style={styles.img}
                    // source={require('../../assets/img/dog.jpeg')}
                    source={{uri: animal.images[0]}}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.btnBack}
                >
                    {/* <View> */}
                        <Image
                            source={require('../../assets/img/icons/right/right_3x.png')}
                            style={styles.imgArrow}
                        />
                        <Text style={styles.name}>{animal.name}</Text>
                    {/* </View> */}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => console.log('btnFavorite')}
                    style={styles.btnFavorite}
                >
                    <Image
                        source={require('../../assets/img/icons/favOn/favOn_3x.png')}
                        style={styles.imgFavorite}
                    />
                </TouchableOpacity>
                <View style={styles.location}>
                    <Image
                        source={require('../../assets/img/icons/location/location_3x.png')}
                        style={styles.iconLocation} />
                    <Text style={styles.textLocation}>Animal Junction Shelter, Haifa</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.textDescription}>A cat was found on a palm tree in a garden in the city center. Affectionate, loves sour cream and folk music.</Text>
                </View>
                <View style={styles.media}>
                    <Image
                        source={require('../../assets/img/icons/media/image_3x.png')}
                        style={styles.mediaIcon} />
                    <Text style={styles.mediaText}>24 PHOTOS</Text>
                    <Image
                        source={require('../../assets/img/icons/media/play_3x.png')}
                        style={styles.mediaIcon} />
                    <Text style={styles.mediaText}>3 VIDEOS</Text>
                </View>
                <View style={styles.activities}>
                    <Text style={styles.activitiesText}>Last Help Activity</Text>
                    <PawDeed />
                    <PawDeed />
                    <PawDeed />
                    <PawDeed />
                    <PawDeed />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // height: 300,
        width: '100%',
        // backgroundColor: '#fff'
    },
    img: {
        height: 300,
        width: '100%',
    },
    btnBack: {
        // height:42,
        width: '80%',
        position: 'absolute',
        top: 25,
        left: 10
    },
    imgArrow: {
        height: 32,
        width: 32,
        transform: [{ rotate: '180deg' }]
    },
    name: {
        position: 'absolute',
        fontSize: 28,
        fontFamily: 'CirceBold',
        color: '#fff',
        backgroundColor: 'transparent',
        top: 2,
        left: 35
    },
    btnFavorite: {
        position: 'absolute',
        direction: 'rtl',
        top: 25,
        right: 20
    },
    imgFavorite: {
        height: 32,
        width: 32,
    },
    location: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 55,
        marginLeft: 28,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    iconLocation: {
        height: 24,
        width: 24
    },
    textLocation: {
        marginTop: 13,
        marginLeft: 13,
        fontFamily: 'Circe',
        fontSize: 17,
        color: '#633ae9',
    },
    description: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 28,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    textDescription: {
        fontFamily: 'Circe',
        fontSize: 17,
    },
    media: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 28,
        marginTop: -10,
        height: 55,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    mediaIcon: {
        height: 28,
        width: 28
    },
    mediaText: {
        fontFamily: 'CirceBold',
        fontSize: 12,
        color: '#a9a9a9',
        letterSpacing: 2,
    },
    activities: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 28,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    activitiesText: {
        fontFamily: 'CirceBold',
        fontSize: 21,
        marginTop: 10,
        marginBottom: 10,
    }
})