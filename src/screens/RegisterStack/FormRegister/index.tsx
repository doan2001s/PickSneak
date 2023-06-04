import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { GoBack, AirBnbText } from "../../../component";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from "../../../redux-store/actions/register";

export const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const user = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (validateForm()) {
            try {
                const response = await dispatch(registerUser(email, password, name, navigation));
                console.log(response);
            } catch (error) {
                // Handle error
            }
        }
    };

    const handleTogglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const validateForm = () => {
        let isValid = true;

        // Validate name
        if (name.length < 2 || /\W/.test(name)) {
            setNameError('Tên phải có ít nhất 2 ký tự và không có ký hiệu đặc biệt.');
            isValid = false;
        } else {
            setNameError('');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError('Email không hợp lệ.');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Validate password
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            setPasswordError(
                'Mật khẩu phải có ít nhất 8 ký tự, bao gồm 1 chữ hoa, 1 chữ số, và 1 ký tự đặc biệt.'
            );
            isValid = false;
        } else {
            setPasswordError('');
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError('Mật khẩu xác nhận không khớp.');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        return isValid;
    };

    return (
        <View style={styles.container}>
            <GoBack title='Đăng ký' />
            <ScrollView>
                <View style={{ height: '100%' }}>
                    <View style={{ height: '20%', alignItems: 'center' }}>
                        <AirBnbText fontSize={38} />
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            autoCapitalize="none"
                            value={name}
                            onChangeText={setName}
                            placeholderTextColor='gray'
                        />
                        {nameError !== '' && <Text style={styles.errorText}>{nameError}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor='gray'
                        />
                        {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
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
                        {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Confirm Password"
                                secureTextEntry={hidePassword}
                                autoCapitalize="none"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
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
                        {confirmPasswordError !== '' && (
                            <Text style={styles.errorText}>{confirmPasswordError}</Text>
                        )}
                        <TouchableOpacity onPress={handleLogin} style={styles.button}>
                            <Text style={styles.buttonText}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {user && <Text>{user.email} đã đăng ký thành công!</Text>}
            </ScrollView>
        </View>
    );
};
