/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import ProfileScreen from './ProfileScreen';
import UserScreen from './UserScreen';

Ionicons.loadFont(); // Ioniconsを読み込む時にエラーが出ないように
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab Navigation
const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            // homeの時
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            // 設定の時
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          } else if (route.name === 'User') {
            // プロフィール
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Search') {
            // 検索
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Search" component={SettingScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

// Routing
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeTab} options={{ headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
