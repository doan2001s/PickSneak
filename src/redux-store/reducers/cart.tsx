import { ADD_TO_CART, ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAIL } from "../types/cartTypes";

const initialState = {
    cartItems: [],
    loading: false,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                loading: false
            };
        case ADD_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_CART_SUCCESS:
            return {
                ...state,
                cartItems:action.payload,
                loading:false
            };
        case GET_CART_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}