
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../types/registerTypes"
const initialState = {
    user: null,
    error: null,
    success: false,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                success: true,
            };
        case CREATE_USER_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};
