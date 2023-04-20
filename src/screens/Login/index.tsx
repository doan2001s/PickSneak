import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AirBnbText, GoBack } from '../../component/index';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux-store/actions/auth';
import { useNavigation } from '@react-navigation/native';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log("user", user)
    const navigation = useNavigation();
    const handleSignUp = async () => {
        console.log("Click")
        try {
            const response = await dispatch(loginUser(email, password, navigation));
            console.log("res", response)
        } catch (error) {
            console.log(error)
        }
    };

    const handleTogglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };
    const validateEmail = (text) => {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(text);
        if (emailRegex.test(text)) {
            setEmailError('');
        } else {
            setEmailError('Email không hợp lệ');
        }
        setIsSignUpDisabled(!emailRegex.test(text) || password.length < 8);
        if (emailRegex.test(text) && password.length >= 8) {
            setIsSignUpDisabled(false);
        }
    };

    const validatePassword = (text) => {
        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        setPassword(text);
        if (passwordRegex.test(text)) {
            setPasswordError('');
        } else {
            setPasswordError('Mật khẩu không hợp lệ');
        }
        setIsSignUpDisabled(email.length === 0 || !passwordRegex.test(text));
        if (email.length !== 0 && passwordRegex.test(text)) {
            setIsSignUpDisabled(false);
        }
    };
    return (

        <View style={styles.container}>
            <GoBack title='Đăng nhập' />
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
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={validateEmail}
                            placeholderTextColor='gray'
                        />
                        {emailError ? <Text style={styles.messError} >{emailError}</Text> : null}
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Mật khẩu"
                                secureTextEntry={hidePassword}
                                autoCapitalize="none"
                                value={password}
                                onChangeText={validatePassword}
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
                        {passwordError ? <Text style={styles.messError}>{passwordError}</Text> : null}
                        <TouchableOpacity onPress={handleSignUp} style={styles.button} disabled={isSignUpDisabled}>
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Quên mật khẩu')} style={styles.link}>
                            <Text style={styles.linkText}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                        <View style={styles.signupContainer}>
                            <Text style={styles.signupText}>Bạn chưa có tài khoản?</Text>
                            <TouchableOpacity onPress={() => console.log('Đăng ký')} style={styles.signupLink}>
                                <Text style={styles.signupLinkText}>Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};