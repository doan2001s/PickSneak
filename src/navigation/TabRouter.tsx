import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Discover } from "../screens/Discover";
import { Profile } from "../screens/Profile";
import { Messenger } from "../screens/Messenger";
import { CartScreen } from "../screens/Trip";
import { Favourite } from "../screens/Favourite";
import { Search } from "../screens/Search";
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
          } else if (route.name === 'Search') {
            iconName = focused ? 'card-search-outline' : 'card-search-outline';
          } else if (route.name === 'Messenger') {
            iconName = focused ? 'message-outline' : 'message-outline';
          } else if (route.name === 'CartScreen') {
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
      }} name="Search" component={Search} />
      <Tab.Screen options={{
        tabBarLabel: 'Giỏ hàng'
      }} name="CartScreen" component={CartScreen} />
      <Tab.Screen options={{
        tabBarLabel: 'Events'
      }} name="Messenger" component={Messenger} />
      <Tab.Screen options={{
        tabBarLabel: 'Tiểu sử'
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  )
};