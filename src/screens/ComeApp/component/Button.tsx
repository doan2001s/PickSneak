import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";


export const ButtonSign = ({ navigation }) => {
    return (
        <View style={{ width: '100%', justifyContent: "center", alignItems: 'center'}}>
            <TouchableOpacity
                style={styles.buttonSignUp}
                onPress={() => {
                    navigation.navigate('Register')
                }}
            >
                <Text>Đăng ký với PICKSNEAK</Text>
            </TouchableOpacity>
            <View style={{ width: '100%', justifyContent: "center", alignItems: 'center', top: 20 }}>
                <TouchableOpacity
                    style={styles.buttonSignUp}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonSignUp: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        opacity: 0.8,
        padding: 10,
        width: '80%',
        top: 20,
        alignItems: 'center',
        color: '#eee',
        bottom: 20
    },
})