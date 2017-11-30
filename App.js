import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Asset, AppLoading } from 'expo'
import Splash from './src/components/Splash'


export default class App extends React.Component {
  state = {
    isReady: false
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./src/assets/splash.png'),
    ]

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    })
    return Promise.all(cacheImages)
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <View style={styles.container}>
        <Splash />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
