import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'
import ProfileScreen from './screens/ProfileScreen'
import NearbyPlaces from './screens/NearbyPlaces'
import PawList from './screens/PawList'

export const AppNavigator = TabNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  NearbyPlaces: { screen: NearbyPlaces },
  PawList: { screen: PawList }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#633ae9',
    },
    order: ['NearbyPlaces', 'PawList', 'Login', 'Main', 'Profile']
  });

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