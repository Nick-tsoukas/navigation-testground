import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Details" component={DetailsScreen}/>
         </HomeStack.Navigator>
    )
    
}

export default () => (
    <NavigationContainer>
        <HomeStackScreen/>
    </NavigationContainer>
)