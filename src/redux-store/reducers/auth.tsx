import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SET_USER } from "../types/authTypes";

const initialState = {
    user: null,
    isLoading: false,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoading: false,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: null
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}