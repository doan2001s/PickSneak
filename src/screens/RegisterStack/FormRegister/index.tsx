import React, { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { GoBack } from "../../../component";
import { AirBnbText } from "../../../component";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from "../../../redux-store/actions/register";
export const Register = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [hidePassword, setHidePassword] = useState(true);
    const  user = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleLogin = async () => {
        // Xử lý đăng nhập ở đây
        try {
          const response =  await dispatch(registerUser(email, password, name));
          console.log(response)
        } catch (error) {
            
        }
    };
    const handleTogglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.container}>
            <GoBack title='Đăng ký' />
            <ScrollView>
                <View style={{ height: '100%' }}>
                    <View style={{ height: '20%', alignItems: 'center' }}>
                        <AirBnbText fontSize={38} />
                    </View>
                    <View style={{
                        padding: 20,
                        justifyContent: 'center',
                    }}>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Name"
                                autoCapitalize="none"
                                value={name}
                                onChangeText={setName}
                                placeholderTextColor='gray'
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                                placeholderTextColor='gray'
                            />
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.passwordInput}
                                    placeholder="Password"
                                    secureTextEntry={hidePassword}
                                    autoCapitalize="none"
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholderTextColor='gray'
                                />
                                <TouchableOpacity
                                    onPress={handleTogglePasswordVisibility}
                                    style={styles.iconButton}
                                >
                                    <Ionicons
                                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                                        size={24}
                                        color="#666"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.passwordInput}
                                    placeholder="Confirm Password"
                                    secureTextEntry={hidePassword}
                                    autoCapitalize="none"
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholderTextColor='gray'
                                />
                                <TouchableOpacity
                                    onPress={handleTogglePasswordVisibility}
                                    style={styles.iconButton}
                                >
                                    <Ionicons
                                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                                        size={24}
                                        color="#666"
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                                <Text style={styles.buttonText}>Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {user && <Text>{user.email} registered successfully!</Text>}
            </ScrollView>

        </View>
    )
}