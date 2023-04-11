import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { registerUser } from '../actions/register';
import { loginUser } from '../actions/auth';
import { categoriesReducer } from '../reducers/category';
import { productReducer } from '../reducers/product';
const rootReducer = combineReducers({
    register: registerUser,
    loginUser:loginUser,
    categories:categoriesReducer,
    products:productReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;