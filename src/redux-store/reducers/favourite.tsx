import { ADD_TO_FAVOURITE_FAIL, ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, GET_FAVOURITE_FAIL, GET_FAVOURITE_REQUEST, GET_FAVOURITE_SUCCESS } from "../types/favouriteType";

const initialState = {
    favoritesItem: [],
    loading: false,
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ADD_TO_FAVOURITE_SUCCESS:
            return {
                ...state,
                favoritesItem: [...state.favoritesItem, action.payload],
                loading: false
            };
        case ADD_TO_FAVOURITE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case GET_FAVOURITE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_FAVOURITE_SUCCESS:
            return {
                ...state,
                favoritesItem: action.payload,
                loading: false
            };
        case GET_FAVOURITE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};