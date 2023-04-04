import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { AirBnbText } from "../../component";
import { ButtonSign } from "./component/Button";
import { GoogleLoginButton } from "./component/googleButton";
import { styles } from "./styles";
export const ComeApp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <AirBnbText fontSize={38} />
            </View>
            <View style={styles.middleSection}>
                <View style={{ width: '100%', justifyContent: "center", alignItems: 'center' }}>
                    <GoogleLoginButton />
                    <ButtonSign navigation={navigation} />
                </View>
            </View>
            <View style={styles.bottomSection}>
            </View>
        </View>
    )
}