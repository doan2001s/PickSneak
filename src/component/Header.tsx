import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AirBnbText } from './AirBnbTxt';
export const AppHeader = () => {
    return (
        <View style={styles.container}>
            <View>
                <AirBnbText fontSize={18}  />
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="cards-heart-outline" size={25}  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="bell-outline" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    },
    button: {
        paddingHorizontal: 10,
    },
});