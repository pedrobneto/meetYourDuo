import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Fontisto, FontAwesome, AntDesign } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MatchScreen from '../screens/MatchScreen'

const AppStack = createStackNavigator();
const AppTabs = createMaterialTopTabNavigator();

import styles from './styles'
import colors from '../util/colors'

const AppRoutes = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='HomeTabNavigator' component={HomeTabNavigator} />
    </AppStack.Navigator >
)

const HomeTabNavigator = () => (
    <AppTabs.Navigator
        style={styles.tabBarStyle}
        tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.pink,
            inactiveTintColor: colors.gray,
            style: styles.tabBarOptionsStyle,
            indicatorStyle: styles.indicatorStyle,
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

                if (route.name === 'Home') {
                    return <Fontisto name="fire" size={24} color={color} />
                }
                else if (route.name === 'Profile') {
                    return <FontAwesome name="user-circle-o" size={24} color={color} />
                }
                else if (route.name === 'Match') {
                    return <AntDesign name="message1" size={24} color={color} />
                }
            }
        })}
    >
        <AppTabs.Screen name='Profile' component={ProfileScreen} />
        <AppTabs.Screen name='Home' component={HomeScreen} />
        <AppTabs.Screen name='Match' component={MatchScreen} />
    </AppTabs.Navigator >
)

export default AppRoutes;