import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class PawStatus extends Component {
    render() {
        const { care, attention } = this.props
        return (
            <View>
                {care ? <View>
                    <Image
                        style={styles.avatar}
                        source={require('../assets/avatar.jpeg')}
                    />
                    <Image
                        style={styles.heartIcon}
                        source={require('../assets/img/icons/takepet/icTakepet_3x.png')}
                    />
                </View> : null}
                {attention ? <Image
                    style={styles.attention}
                    source={require('../assets/img/icons/attention/icAttention_3x.png')}
                /> : null}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        height: 44,
        width: 44,
        margin: 13,
        position: 'absolute',
        direction: 'ltr',
        right: 0,
        borderRadius: 22,
        borderColor: '#fff',
        borderWidth: 2.5
    },
    heartIcon: {
        height: 20,
        width: 20,
        // margin: 13,
        position: 'absolute',
        direction: 'ltr',
        top: 40,
        right: 40,
    },
    attention: {
        height: 40,
        width: 40,
        margin: 13,
        position: 'absolute',
        direction: 'ltr',
        right: 0
    }
})