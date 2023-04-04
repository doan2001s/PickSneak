import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { registerUser } from '../actions/register';
import { loginUser } from '../actions/auth';

const rootReducer = combineReducers({
    register: registerUser,
    loginUser:loginUser
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;