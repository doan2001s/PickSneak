import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { AirBnbText, GoBack } from '../../../component';
export const OTPScreen = ({ navigation }) => {

    const route = useRoute();
    const [code, setCode] = useState('');
    const { email } = route.params;

    const handleOTPChange = (value, index) => {
        const codeArray = code.split('');
        codeArray[index] = value;
        setCode(codeArray.join(''));
    }

    const handleOTPSubmit = () => {
        // Do something with the OTP code entered by the user
    }

    return (

        <View style={styles.container}>
            <GoBack title='OTP' />
            <View style={{height:'20%'}}>
                <AirBnbText />
            </View>
            <View style ={styles.boxDetail}>
                <Text style={styles.title}>Enter OTP code sent to:</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.codeContainer}>
                <TextInput
                    style={styles.codeInput}
                    onChangeText={(value) => handleOTPChange(value, 0)}
                    value={code[0]}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.codeInput}
                    onChangeText={(value) => handleOTPChange(value, 1)}
                    value={code[1]}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.codeInput}
                    onChangeText={(value) => handleOTPChange(value, 2)}
                    value={code[2]}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.codeInput}
                    onChangeText={(value) => handleOTPChange(value, 3)}
                    value={code[3]}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.codeInput}
                    onChangeText={(value) => handleOTPChange(value, 4)}
                    value={code[4]}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.codeInput}
                    onChangeText={(value) => handleOTPChange(value, 5)}
                    value={code[5]}
                    maxLength={1}
                    keyboardType='numeric'
                />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleOTPSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    boxDetail:{
        alignItems:'center',
        textAlign:'center'
    },
    email: {
        fontSize: 16,
        marginBottom: 20,
        color:'silver'
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    codeInput: {
        width: '15%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        textAlign:'center'
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
    },
});