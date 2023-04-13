import {
    GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT,
    GET_ALL_PRODUCT_FAIL,
    FILTER_PRODUCTS_BY_CATEGORY,
    GET_PRODUCT_BY_ID, GET_PRODUCT_BY_ID_FAIL,
    GET_PRODUCT_BY_ID_REQUEST,
} from "../types/productsType";

const initialState = {
    productList: [],
    filteredProducts: [],
    loading: false,
    error: null,
    product: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_PRODUCT:
            return {
                ...state,
                loading: false,
                productList: action.payload,
            };
        case GET_ALL_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FILTER_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                loading: false,
                filteredProducts: action.payload
            };
        case GET_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        case GET_PRODUCT_BY_ID_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_ALL_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
