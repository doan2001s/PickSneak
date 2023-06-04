import React, { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { GoBack } from "../../../component";
import { AirBnbText } from "../../../component";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { resetPassword, verifyOTP } from "../../../redux-store/actions/auth";

export const ChangePassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [hidePassword, setHidePassword] = useState(true);

    const handleTogglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };
    const [otp, setOTP] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const handleResetPassword = () => {
        if (password !== confirmPassword) {
            setErrorMessage('Mật khẩu không trùng khớp!');
            return;
        }
        dispatch(resetPassword(email, password))
            .then(() => {
                setShowOTP(true);
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const handleVerifyOTP = () => {
        dispatch(verifyOTP(email, otp))
            .then(() => {
                // Thành công đặt lại mật khẩu
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };
    return (
        <View style={styles.container}>
            <GoBack title='Đặt lại mật khẩu' />
            <ScrollView>
                <View style={{ height: '100%' }}>
                    <View style={{ height: '20%', alignItems: 'center' }}>
                        <AirBnbText title="PICKSNEACK" fontSize={38} />
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
                                onChangeText={setEmail}
                                placeholderTextColor='gray'
                            />
                            {!showOTP && (
                                <>
                                    <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                                        <Text>Gửi yêu cầu đặt lại mật khẩu</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                            {showOTP && (
                                <>
                                    <TextInput
                                        placeholder="Mã OTP"
                                        keyboardType="number-pad"
                                        autoCapitalize="none"
                                        value={otp}
                                        onChangeText={setOTP}
                                    />
                                    <TouchableOpacity onPress={handleVerifyOTP}>
                                        <Text>Xác nhận mã OTP</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                            {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
                        </View>
                        {/* <View>
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
                                    placeholder="Reset password"
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
                            <TouchableOpacity onPress={() => handleContinue()} style={styles.button}>
                                <Text style={styles.buttonText}>Tiếp tục</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}