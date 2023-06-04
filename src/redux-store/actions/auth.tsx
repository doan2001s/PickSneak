import auth from "@react-native-firebase/auth"
import firestore, { firebase } from "@react-native-firebase/firestore";
import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    VERIFY_OTP_FAILURE,
    VERIFY_OTP_REQUEST,
    VERIFY_OTP_SUCCESS,
    DELETE_ACCOUNT_REQUEST,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAIL
} from "../types/authTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = (email, password, navigation) => async (dispatch) => {
    try {
        const { user } = await auth().signInWithEmailAndPassword(email, password);
        dispatch({
            type: LOGIN_SUCCESS,
            user
        });
        const storage = await AsyncStorage.setItem("storage", user.uid)
        console.log("storge", storage)
        const storedUserId = await AsyncStorage.getItem('storage');
        console.log('Stored user ID:', storedUserId);
        console.log("user:", user)
        navigation.navigate('TabRouter');
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error
        })
        console.log("Error: ", error);
    }
}

export const setUser = uid => ({
    type: 'SET_USER',
    payload: uid,
});

export const logoutUser = (navigation) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_REQUEST });

        await auth().signOut();

        await AsyncStorage.removeItem('storage');
        const storedUserId = await AsyncStorage.getItem('storage');
        console.log('Stored user ID:', storedUserId);
        dispatch({ type: LOGOUT_SUCCESS });
        navigation.navigate('Login');
    } catch (error) {
        dispatch({
            type: LOGOUT_FAILURE,
            payload: error,
        });
    }
};

export const resetPassword = (email) => async (dispatch) => {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    try {
        await auth().sendPasswordResetEmail(email);

        dispatch({ type: RESET_PASSWORD_SUCCESS });
    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAILURE,
            payload: error.message,
        });
    }
};

export const verifyOTP = (email, newPassword, otp) => async (dispatch) => {
    dispatch({ type: VERIFY_OTP_REQUEST });

    try {
        const credential = auth.EmailAuthProvider.credential(email, otp);
        console.log("credential", credential)
        await auth().currentUser.reauthenticateWithCredential(credential);
        await auth().currentUser.updatePassword(newPassword);

        dispatch({ type: VERIFY_OTP_SUCCESS });
    } catch (error) {
        dispatch({
            type: VERIFY_OTP_FAILURE,
            payload: error.message,
        });
    }
};
export const deleteAccount = (navigation) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ACCOUNT_REQUEST });

        const user = auth().currentUser;
        const { uid } = user;
        await user.delete();
        await firestore().collection('users').doc(uid).delete();
        await AsyncStorage.removeItem('storage');
        dispatch({ type: DELETE_ACCOUNT_SUCCESS });
        navigation.navigate('ComeApp');
    } catch (error) {
        dispatch({
            type: DELETE_ACCOUNT_FAIL,
            payload: error,
        });
    }
};