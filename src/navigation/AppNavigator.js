import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation'

import ProfileScreen from './screens/ProfileScreen'
import NearbyPlacesScreen from './screens/NearbyPlacesScreen'
import PawListScreen from './screens/PawListScreen'
import SosScreen from './screens/SosScreen'
import PawFeedScreen from './screens/PawFeedScreen'
import PawListCardEntryScreen from './screens/PawListCardEntryScreen'

import Header from '../components/Header'


export const TabAppNavigator = TabNavigator({
  Profile: { screen: ProfileScreen },
  NearbyPlaces: { screen: NearbyPlacesScreen },
  PawList: { screen: PawListScreen },
  Sos: { screen: SosScreen },
  PawFeed: { screen: PawFeedScreen }
}, {
    tabBarPosition: 'bottom',
    initialRouteName: 'PawFeed',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#633ae9',
    },
    order: ['NearbyPlaces', 'PawList', 'PawFeed', 'Sos', 'Profile']
  })


export const AppNavigator = StackNavigator({
  Root: {
    screen: TabAppNavigator,
  },
  PawListCardEntryScreen: {
    screen: PawListCardEntryScreen,
    navigationOptions: {
      header: StackNavigator.Header,
      title: 'PawListCardEntryScreen',
      headerStyle: {
        backgroundColor: 'red'
      }
    },
  },
  /*   Profile: {
      screen: MyProfileScreen,
      path: '/people/:name',
      navigationOptions: ({ navigation }) => {
        title: `${navigation.state.params.name}'s Profile!`
      },
    }, */
}, {
    navigationOptions: {
      header: null
    },

  })

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);