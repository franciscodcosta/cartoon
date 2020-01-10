import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Photo from './pages/photo';

const RootStack = createStackNavigator({
    Main,
    Photo
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },
});
const AppContainer = createAppContainer(RootStack);

export default AppContainer;

