import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { registerUser } from '../actions/register';
// import { loginUser } from '../actions/auth';
import { loginReducer } from '../reducers/auth';
import { categoriesReducer } from '../reducers/category';
import { productReducer } from '../reducers/product';
import { cartReducer } from '../reducers/cart';
import { favoritesReducer } from '../reducers/favourite';
const rootReducer = combineReducers({
    register: registerUser,
    loginUser: loginReducer,
    categories: categoriesReducer,
    products: productReducer,
    carts: cartReducer,
    favorites: favoritesReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;