import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

export const GoogleLoginButton = () => {
    return (
        <View style={{ width: '100%', justifyContent: "center", alignItems: 'center' }}>
            <View style={{ width: '100%', justifyContent: "center", alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.buttonSignUp}
                    onPress={() => {
                        // navigation.navigate('Register')
                    }}
                >
                    <Text style={{ color: '#000' }}>Tiếp tục với Google</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', justifyContent: "center", alignItems: 'center',flexDirection:'row',top:10 }}>
                <View style={{width:80,height:2,backgroundColor:'silver',right:5}}>
                </View>
                <View >
                    <Text>
                        Hoặc
                    </Text>
                </View>
                <View style={{width:80,height:2,backgroundColor:'silver',left:5}}>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonSignUp: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: '#fff',
        opacity: 0.8,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        color: '#000',
    },
})
