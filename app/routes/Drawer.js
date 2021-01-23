import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './MainStack';
import MiscStack from './MiscStack';

const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeStack}
                />
                <Drawer.Screen
                    name="Image Credits"
                    component={MiscStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

// const RootDrawerNavigation = createDrawerNavigation({
//     Home: {
//         screen: HomeStack
//     },
//     Misc: {
//         screen: MiscStack
//     }
// });

export default DrawerNav;