import { CREATE_USER_FAILURE, CREATE_USER_SUCCESS } from "../types/registerTypes";
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";
import { CommonActions } from "@react-navigation/native";
import { Alert } from "react-native";

export const registerUser = (email, password, name, navigation) => async (dispatch) => {
    try {
        const emailExists = await auth().fetchSignInMethodsForEmail(email);
        if (emailExists.length > 0) {
            Alert.alert('Email này đã tồn tại')
        }
        const { user } = await auth().createUserWithEmailAndPassword(email, password);
        await firestore().collection('users').doc(user.uid).set({
            name: name,
        });
        await firestore().collection('users').doc(user.uid).collection('cart').doc('default').set({
            cart: [],
        });
        await firestore().collection('users').doc(user.uid).collection('favorites').doc('default').set({
            favorites: [],
        });
        console.log("Đăng ký", user)
        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: user,
        });
        Alert.alert("Đăng ký thành công")
        navigation.navigate('Login')
    } catch (error) {
        dispatch({
            type: CREATE_USER_FAILURE,
            payload: error,
        });
    }
}