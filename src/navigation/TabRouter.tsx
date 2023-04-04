import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Discover } from "../screens/Discover";
import { Profile } from "../screens/Profile";
import { Messenger } from "../screens/Messenger";
import { Trip } from "../screens/Trip";
import { Favourite } from "../screens/Favourite";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
const Tab = createBottomTabNavigator();

export const TabRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Discover') {
            iconName = focused
              ? 'home-search-outline'
              : 'home-search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'cards-heart-outline' : 'cards-heart-outline';
          } else if (route.name === 'Messenger') {
            iconName = focused ? 'message-outline' : 'message-outline';
          } else if (route.name === 'Trip') {
            iconName = focused ? 'flag-outline' : 'flag-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen options={{
        tabBarLabel: 'Khám phá'
      }} name="Discover" component={Discover} />
      <Tab.Screen options={{
        tabBarLabel: 'Yêu thích'
      }} name="Favourite" component={Favourite} />
      <Tab.Screen options={{
        tabBarLabel: 'Chuyến đi'
      }} name="Trip" component={Trip} />
      <Tab.Screen options={{
        tabBarLabel: 'Hộp thư'
      }} name="Messenger" component={Messenger} />
      <Tab.Screen options={{
        tabBarLabel: 'Tiểu sử'
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  )
};