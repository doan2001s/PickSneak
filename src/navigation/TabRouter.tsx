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
            iconName = focused ? 'card-search-outline' : 'card-search-outline';
          } else if (route.name === 'Messenger') {
            iconName = focused ? 'message-outline' : 'message-outline';
          } else if (route.name === 'Trip') {
            iconName = focused ? 'cart-outline' : 'cart-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black'
        }
      })}

    >
      <Tab.Screen options={{
        tabBarLabel: 'Khám phá'
      }} name="Discover" component={Discover} />
      <Tab.Screen options={{
        tabBarLabel: 'Tìm kiếm'
      }} name="Favourite" component={Favourite} />
      <Tab.Screen options={{
        tabBarLabel: 'Giỏ hàng'
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