import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from './Header';

import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import TvShowsScreen from '../screens/TvShowsScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import MusicScreen from '../screens/MusicScreen';

const Stack = createStackNavigator();

function MainStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName={"Home"}>
            <Stack.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    headerTitle: () => <Header title="The Magic Rock" navigation={navigation} />
                }}
            />
            <Stack.Screen
                name={'Movies'}
                component={MoviesScreen}
                options={{
                    headerTitle: 'Movies',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name={'TV Shows'}
                component={TvShowsScreen}
                options={{
                    headerTitle: 'TV Shows',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name={'Restaurants'}
                component={RestaurantsScreen}
                options={{
                    headerTitle: 'Restaurants',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name={'Music'}
                component={MusicScreen}
                options={{
                    headerTitle: 'Music',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    );
}

export default MainStack;

// const screens = {
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: ({ navigation }) => {
//             return {
//                 headerTitle: () => <Header title='The Magic Rock' navigation={navigation} />
//             }
//         },
//     },
//     Movies: {
//         screen: Movies,
//         navigationOptions: {
//             title: 'Movies'
//         }
//     },
//     TV_Shows: {
//         screen: TVShows,
//         navigationOptions: {
//             title: 'TV Shows'
//         }
//     },
//     Restaurants: {
//         screen: Restaurants,
//         navigationOptions: {
//             title: 'Restaurants'
//         }
//     },
//     Music: {
//         screen: Music,
//         navigationOptions: {
//             title: 'Music'
//         }
//     }
// };

// const MainStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {
//         headerTintColor: '#141414',
//         headerStyle: { backgroundColor: '#FFFFFA', height: 60 }
//     }
// });