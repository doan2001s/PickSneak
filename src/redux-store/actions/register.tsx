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
        console.log("Đăng ký",user)
        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: user,
        });
        Alert.alert("Đăng ký thành công")
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        );
    } catch (error) {
        dispatch({
            type: CREATE_USER_FAILURE,
            payload: error,
        });
        Alert.alert("Đăng ký không thành công");
    }
}