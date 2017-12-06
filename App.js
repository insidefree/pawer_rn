import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Asset, AppLoading } from 'expo'
import { Provider } from 'react-redux'
import { Font } from 'expo';

/* components */
import store from './src/store'
import Splash from './src/components/Splash'
import AppWithNavigationState from './src/navigation/AppNavigator'

export default class App extends React.Component {
  state = {
    isReady: false,
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Baloo': require('./src/assets/fonts/Baloo-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
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
    if (!this.state.isReady && !this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    
      return (
        <Provider store={store}>
          {this.state.fontLoaded ? <AppWithNavigationState /> : <View />}
        </Provider>
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
