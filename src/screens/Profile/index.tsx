import React from "react";
import { SafeAreaView, Text, View, Button, TouchableOpacity } from "react-native";
import { AppHeader } from "../../component";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux-store/actions/auth";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from "./style";
export const Profile = () => {
    const navigation = useNavigation();
    // const dispatch = useDispatch();
    // const handleLogout = () => {
    //     dispatch(logoutUser(navigation))
    // }
    const handlesGeneral = () => {
        navigation.navigate('General')
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: "100%" }}>
            <AppHeader title="PICKSNEAK" fontSize={18} />
            <View>
                <TouchableOpacity onPress={() => handlesGeneral()} style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="settings-sharp" style={styles.icon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Tổng quan
                        </Text>
                        <Text style={styles.subtitle}>
                            Cài đặt tổng quan
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="md-sunny-sharp" style={styles.icon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Giao diện
                        </Text>
                        <Text style={styles.subtitle}>
                            Tùy chỉnh giao diện
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="bell" style={styles.icon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Thông báo
                        </Text>
                        <Text style={styles.subtitle}>
                            Tùy chọn thông báo
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="contact-support" style={styles.icon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Liên hệ
                        </Text>
                        <Text style={styles.subtitle}>
                            Liên hệ để được giúp đỡ
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="contact-support" style={styles.icon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Liên hệ
                        </Text>
                        <Text style={styles.subtitle}>
                            Liên hệ để được giúp đỡ
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <Button title="Logout" onPress={handleLogout} /> */}
        </SafeAreaView>
    )
};