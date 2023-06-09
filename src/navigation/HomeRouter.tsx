import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Spalsh } from '../screens/Splash';
import { Login } from '../screens/Login';
import { TabRouter } from './TabRouter';
import { ComeApp } from '../screens/ComeApp';
import { Register } from '../screens/RegisterStack';
import { OTPScreen } from '../screens/RegisterStack';
import { Detail } from '../screens/ProductDetail';
import { Favourite } from '../screens/Favourite';
import { Checkout } from '../screens/Checkout';
import { General } from '../screens/General';
import { useNavigation } from '@react-navigation/native';
import { OTPInput } from '../screens/ResetPassword';
import { ChangePassword } from '../screens/ResetPassword';




const Stack = createStackNavigator();

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux-store/actions/auth';

export const HomeRouter = () => {
    const dispatch = useDispatch();
    const [uidExists, setUidExists] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const uid = await AsyncStorage.getItem('storage');
                console.log('User.Uid', uid)
                if (uid) {
                    dispatch(setUser(uid));
                    setUidExists(true);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, [dispatch]);

    return (
        // <NavigationContainer>
        //     <Stack.Navigator
        //         screenOptions={{ headerShown: false }}
        //     >
        //         {uidExists ? (
        //             <Stack.Screen name='TabRouter' component={TabRouter} />

        //         ) : (
        //             <>
        //                 {/* <Stack.Screen name='Spalsh' component={Spalsh}/> */}
        //                 <Stack.Screen name='ComeApp' component={ComeApp} />
        //                 <Stack.Screen name='Register' component={Register} />
        //                 <Stack.Screen name='OTPScreen' component={OTPScreen} />
        //                 <Stack.Screen name='Login' component={Login} />
        //             </>
        //         )}
        //         <Stack.Screen name='Detail' component={Detail} />
        //         <Stack.Screen name='Favourite' component={Favourite} />
        //         <Stack.Screen name='Checkout' component={Checkout} />
        //         <Stack.Screen name='General' component={General} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                {/* <Stack.Screen name='Spalsh' component={Spalsh}/> */}
                <Stack.Screen name='ComeApp' component={ComeApp} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='OTPScreen' component={OTPScreen} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ChangePassword' component={ChangePassword} />
                <Stack.Screen name='OTPInput' component={OTPInput} />
                <Stack.Screen name='TabRouter' component={TabRouter} />
                <Stack.Screen name='Detail' component={Detail} />
                <Stack.Screen name='Favourite' component={Favourite} />
                <Stack.Screen name='Checkout' component={Checkout} />
                <Stack.Screen name='General' component={General} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};