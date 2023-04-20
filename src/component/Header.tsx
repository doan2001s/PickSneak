import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AirBnbText } from './AirBnbTxt';
import { useNavigation } from '@react-navigation/native';
export const AppHeader = ({ title, fontSize }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.text, { fontSize }]}>
                    {title}
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Favourite')}  activeOpacity={0.8} style={styles.button}>
                    <MaterialCommunityIcons name="cards-heart-outline" size={25} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}>
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
        borderBottomWidth: 0.5,
        borderBottomColor: 'silver'
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
    text: {
        fontFamily: 'PlayfairDisplay-SemiBoldItalic',
        fontSize: 38,
        fontWeight: 'bold',
        color: 'silver',
        marginHorizontal: 0.5,
    },
});