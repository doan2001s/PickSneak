import auth from "@react-native-firebase/auth"
import firestore, { firebase } from "@react-native-firebase/firestore";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../types/authTypes";
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
        console.log("user Infor:", user)
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