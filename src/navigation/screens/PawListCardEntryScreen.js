import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, StyleSheet } from 'react-native'
/* components */
import PawListCardEntry from '../../components/Cards/PawListCardEntry'


class PawListCardEntryScreen extends Component {
    render() {
        console.log('PawListCardEntryScreen',this.props)
        const { nav } = this.props
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <PawListCardEntry navigation={navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

const mapStateToProps = state => ({
    nav: state.nav,
})

export default connect(mapStateToProps)(PawListCardEntryScreen);