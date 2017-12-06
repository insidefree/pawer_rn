import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    marginTop: 15,
    width: 32,
    height: 32,
  },
});

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Profile Screen
    </Text>
  </View>
);

ProfileScreen.navigationOptions = {
  title: '',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/profile.png')}
      style={[styles.icon, {tintColor: tintColor}]}
    />
  ),
};

export default ProfileScreen;