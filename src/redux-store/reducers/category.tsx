import { GET_ALL_CATEGORY_REQUEST, GET_ALL_CATEGORY_SUCCESS, GET_ALL_CATEGORY_FAIL } from '../types/categoryType';

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        case GET_ALL_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};