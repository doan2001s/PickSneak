import React from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import { AppHeader } from "../../component";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux-store/actions/auth";
import { useNavigation } from '@react-navigation/native';

export const Profile = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser(navigation))
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: "100%" }}>
            <AppHeader />
            <Button title="Logout" onPress={handleLogout} />
        </SafeAreaView>
    )
};