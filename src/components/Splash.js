import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class Splash extends Component {
    render() {
        console.log(this.props.users)
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.props.addNewUser}
                    title="Add new user"
                />
                <Text style={styles.text}>Powered by AXOLOTL</Text>
                {this.props.users.users.map(user => {
                    return <Text style={styles.text} key={user}>{user}</Text>
                })}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewUser: () => dispatch({ type: 'ADD_NEW_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8d51e7",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#ccc"
    }
})