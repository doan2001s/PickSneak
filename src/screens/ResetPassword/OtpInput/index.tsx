import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AppHeader, GoBack } from '../../../component';
import { useNavigation, useRoute } from '@react-navigation/native'
export const OTPInput = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { email } = route.params;
    const [otp, setOTP] = useState('');
    const [countdown, setCountdown] = useState(60);
    const handleOTPChange = (value) => {
        setOTP(value);
    };

    const handleVerifyOTP = () => {
        console.log(`Verifying OTP ${otp}`);
    };
    const handleResendOTP = () => {

        setOTP('');
        setCountdown(60);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Xóa interval khi component bị unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <GoBack title="OTP" />
            <View style={{ height: '100%', top: 200 }}>
                <View style={{ height: '20%', alignItems: 'center', }}>
                    <Text style={{ fontSize: 24, marginBottom: 20 }}>Nhập mã xác minh</Text>
                    <Text style={{ textAlign: 'center' }}>Mã xác minh đã được gửi đến:</Text>
                    <Text>{email}</Text>
                    <Text>Vui lòng nhập mã để tiếp tục.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        style={{ padding: 10, fontSize: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, width: 50, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="number-pad"
                        onChangeText={(value) => handleOTPChange(value)}
                    />
                    <TextInput
                        style={{ padding: 10, fontSize: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, width: 50, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="number-pad"
                        onChangeText={(value) => handleOTPChange(otp + value)}
                    />
                    <TextInput
                        style={{ padding: 10, fontSize: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, width: 50, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="number-pad"
                        onChangeText={(value) => handleOTPChange(otp + value)}
                    />
                    <TextInput
                        style={{ padding: 10, fontSize: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, width: 50, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="number-pad"
                        onChangeText={(value) => handleOTPChange(otp + value)}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:15 }}>
                    <Text>Bạn chưa nhận được mã?</Text>
                    <TouchableOpacity onPress={handleResendOTP} >
                        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}> Gửi lại OTP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', width: '80%', marginTop: 20 }}>
                    <TouchableOpacity onPress={handleVerifyOTP} style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5 }}>
                        <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Xác thực</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};