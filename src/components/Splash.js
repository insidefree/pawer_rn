import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Splash = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Powered by AXOLOTL</Text>
        </View>
    )
}

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