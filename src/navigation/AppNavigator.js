import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'

import ProfileScreen from './screens/ProfileScreen'
import NearbyPlacesScreen from './screens/NearbyPlacesScreen'
import PawListScreen from './screens/PawListScreen'
import SosScreen from './screens/SosScreen'
import PawFeedScreen from './screens/PawFeedScreen'


export const AppNavigator = TabNavigator({
  Profile: { screen: ProfileScreen },
  NearbyPlaces: { screen: NearbyPlacesScreen },
  PawList: { screen: PawListScreen },
  Sos: { screen: SosScreen },
  PawFeed: { screen: PawFeedScreen }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#633ae9',
    },
    order: ['NearbyPlaces', 'PawList', 'PawFeed', 'Sos', 'Profile']
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