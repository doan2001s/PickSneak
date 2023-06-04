import {
    PUSH_NOTIFICATION,
    PUSH_NOTIFICATION_REQUEST,
    PUSH_NOTIFICATION_FAIL
} from "../types/notificationTypes";

const initialState = {
    notification: null,
    loading: false,
    error: null
};

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_NOTIFICATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case PUSH_NOTIFICATION:
            return {
                ...state,
                loading: false,
                notification: action.payload
            };
        case PUSH_NOTIFICATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};