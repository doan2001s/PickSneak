import {
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SET_USER, RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    VERIFY_OTP_REQUEST,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAILURE,
    DELETE_ACCOUNT_FAIL,
    DELETE_ACCOUNT_REQUEST,
    DELETE_ACCOUNT_SUCCESS
} from "../types/authTypes";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    resetPasswordLoading: false,
    resetPasswordError: null,
    verifyOTPLoading: false,
    verifyOTPError: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoading: false,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: null,
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                resetPasswordLoading: true,
                resetPasswordError: null,
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordError: null,
            };
        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordError: action.payload,
            };
        case VERIFY_OTP_REQUEST:
            return {
                ...state,
                verifyOTPLoading: true,
                verifyOTPError: null,
            };
        case VERIFY_OTP_SUCCESS:
            return {
                ...state,
                verifyOTPLoading: false,
                verifyOTPError: null,
            };
        case VERIFY_OTP_FAILURE:
            return {
                ...state,
                verifyOTPLoading: false,
                verifyOTPError: action.payload,
            };
        case DELETE_ACCOUNT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoading: false,
                error: null,
            };
        case DELETE_ACCOUNT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
