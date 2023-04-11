import { GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT, GET_ALL_PRODUCT_FAIL, FILTER_PRODUCTS_BY_CATEGORY } from "../types/productsType";
import firestore from '@react-native-firebase/firestore'

export const getAllProduct = () => async (dispatch) => {
    dispatch({
        type: GET_ALL_PRODUCT_REQUEST,

    });
    try {
        const snapshot = await firestore().collection("products").get();
        console.log("Data Products Actions", snapshot.docs);
        const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: productList
        });
    } catch (error) {
        console.error("Error", error);
        dispatch({
            type: GET_ALL_PRODUCT_FAIL,
            payload: error.message
        });
    }
}

export const filterProductsByCategory = (name) => async (dispatch) => {
    dispatch({ type: FILTER_PRODUCTS_BY_CATEGORY });

    try {
        const snapshot = await firestore()
            .collection("products")
            .where("category", "==", name)
            .get();
        console.log("Filter by category",snapshot.docs)
        const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        dispatch({ type: GET_ALL_PRODUCT, payload: productList });
    } catch (error) {
        dispatch({ type: GET_ALL_PRODUCT_FAIL, payload: error.message });
    }
};
