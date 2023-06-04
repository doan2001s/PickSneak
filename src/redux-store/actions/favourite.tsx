import { GET_FAVOURITE_SUCCESS, GET_FAVOURITE_FAIL, GET_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_FAIL, ADD_TO_FAVOURITE_SUCCESS, ADD_TO_FAVOURITE_REQUEST, REMOVE_FROM_FAVOURITE_FAIL, REMOVE_FROM_FAVOURITE_REQUEST, REMOVE_FROM_FAVOURITE_SUCCESS } from "../types/favouriteType";
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addtoFavourite = (product) => async (dispatch) => {
    dispatch({
        type: ADD_TO_FAVOURITE_REQUEST
    })

    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        console.log('Stored user ID:', storedUserId);
        console.log('Product favourites:', product);
        const favouritesRef = firestore().collection('users').doc(storedUserId).collection('favorites').doc('default');
        const snapshot = await favouritesRef.get();
        const favourites = snapshot.data()?.favourites || [];

        const isProductInFavourites = favourites.some((item) => item.id === product.id);
        if (isProductInFavourites) {
            console.log('Product already exists in favourites');
            dispatch({
                type: ADD_TO_FAVOURITE_FAIL,
                payload: 'Product already exists in favourites'
            });
            return;
        }

        favourites.push(product);
        await favouritesRef.set({ favourites });

        dispatch({
            type: ADD_TO_FAVOURITE_SUCCESS,
            payload: favourites
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: ADD_TO_FAVOURITE_FAIL,
            payload: error.message
        });
    }
};

export const getFavourite = () => async (dispatch) => {
    dispatch({
        type: GET_FAVOURITE_REQUEST
    })
    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        console.log('Stored user ID:', storedUserId);
        const favouritesRef = firestore().collection('users').doc(storedUserId).collection('favorites').doc('default');
        const favouritesDoc = await favouritesRef.get();

        if (favouritesDoc.exists) {
            const favouritesItem = favouritesDoc.data().favourites;
            dispatch({ type: GET_FAVOURITE_SUCCESS, payload: favouritesItem });
            console.log('favourites items:', favouritesItem);
        } else {
            dispatch({ type: GET_FAVOURITE_FAIL, payload: ' is empty.' });
        }

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_FAVOURITE_FAIL, payload: error.message });
    }
}
export const removeFromFavourite = (id) => async (dispatch) => {
    dispatch({
        type: REMOVE_FROM_FAVOURITE_REQUEST
    })

    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        console.log('Stored user ID:', storedUserId);
        const favouritesRef = firestore().collection('users').doc(storedUserId).collection('favorites').doc('default');
        const snapshot = await favouritesRef.get();
        const favourites = snapshot.data()?.favourites || [];

        if (!snapshot.exists) {
            throw new Error('No favourites found');
        }

        const newFavourites = favourites.filter((item) => item.id !== id);
        await favouritesRef.set({ favourites: newFavourites });

        dispatch({
            type: REMOVE_FROM_FAVOURITE_SUCCESS,
            payload: newFavourites
        });
    }
    catch (error) {
        console.log(error);
        dispatch({
            type: REMOVE_FROM_FAVOURITE_FAIL,
            payload: error.message
        });
    }
};
