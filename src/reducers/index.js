import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import { AppNavigator } from '../navigation/AppNavigator'


const initialNavState = AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'Root',
      }),
    ],
  })
)

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

/* animals */
import animals from './animals'

export default combineReducers({
  nav,
  auth,
  animals
});