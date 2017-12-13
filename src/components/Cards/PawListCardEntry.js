import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


export default class PawListCard extends Component {
    render() {
        console.log('PawListCardt', this.props)
        const { name, age } = this.props
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={require('../../assets/img/dog.jpeg')}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.btnBack}
                >
                    <View>
                        <Image
                            source={require('../../assets/img/icons/right/right_3x.png')}
                            style={styles.imgArrow}
                        />
                        <Text style={styles.name}>Hirosima</Text>
                    </View>
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
                <Text>PawListCardEntryScreen qweqw</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: '100%',
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
        top: -4,
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
    }
})