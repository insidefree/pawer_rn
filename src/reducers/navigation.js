/* // import { addNavigationHelpers } from 'react-navigation'
import { StackNavigator } from 'react-navigation'

const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);

const AppNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

// const AppNavigator = StackNavigator(AppRouteConfigs)

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('ADD_NEW_USER'))

export default navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state)

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state
} */