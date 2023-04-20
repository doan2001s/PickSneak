import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { HomeRouter } from './src/navigation/HomeRouter';
import store from './src/redux-store/store/store';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
export default App = () => {
  LogBox.ignoreAllLogs();
  return (
    // <NavigationContainer>
    <Provider store={store}>
      <HomeRouter />
    </Provider>
    // </NavigationContainer>
  );
};
