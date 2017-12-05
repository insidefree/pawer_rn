import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

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
    marginTop: 20,
    width: 32,
    height: 32,
  },
});

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Screen A
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: '',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/menu.png')}
      style={[styles.icon, {tintColor: tintColor}]}
    />
  ),
};

export default LoginScreen;