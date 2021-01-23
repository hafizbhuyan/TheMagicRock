import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from './Header';

import ImageCredit from '../screens/CreditsScreen';
// add more screens like contact info

const Stack = createStackNavigator();

function MiscStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="ImageCredit">
            <Stack.Screen
                name="Image Credit"
                component={ImageCredit}
                options={{
                    headerTitle: () => <Header title="Image Credits" navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
}

export default MiscStack;

// const screens = {
//     Credit: {
//         screen: ImageCredit,
//         navigationOptions: ({ navigation }) => {
//             return {
//                 headerTitle: () => <Header title='Images Credit' navigation={navigation} />
//             }
//         },
//     },
// }

// const MiscStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {
//         headerTintColor: '#141414',
//         headerStyle: { backgroundColor: '#FFFFFA', height: 60 }
//     }
// })