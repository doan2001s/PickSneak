import { GET_ALL_CATEGORY_SUCCESS, GET_ALL_CATEGORY_REQUEST, GET_ALL_CATEGORY_FAIL } from "../types/categoryType";
import firestore from '@react-native-firebase/firestore'

export const getAllCategory = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_CATEGORY_REQUEST
  });
  try {
    const snapshot = await firestore().collection("categories").get();
    console.log("DataCategory Actions", snapshot.docs);
    const categories = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    dispatch({
      type: GET_ALL_CATEGORY_SUCCESS,
      payload: categories
    });
  } catch (error) {
    console.error("Error", error);
    dispatch({
      type: GET_ALL_CATEGORY_FAIL,
      payload: error.message
    });
  }
};
