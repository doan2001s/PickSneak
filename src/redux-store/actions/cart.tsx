import { ADD_TO_CART_FAIL, ADD_TO_CART, ADD_TO_CART_REQUEST, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST } from '../types/cartTypes';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const addToCart = (product, item) => async (dispatch) => {
    dispatch({ type: ADD_TO_CART_REQUEST });
    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        console.log('Stored user ID:', storedUserId);
        console.log('Product Cart:', product);
        const cartRef = firestore().collection('users').doc(storedUserId).collection('cart').doc('default');
        const cartDoc = await cartRef.get();
        const cartData = cartDoc.data();

        if (cartData) {
            const cartItems = cartData.cart || [];
            console.log('Cart items:', cartItems);
            console.log('Product:', product);
            console.log("ProductItem", item)
            const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                const existingProduct = cartItems[existingProductIndex];
                const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
                const newCart = [...cartItems];
                newCart[existingProductIndex] = updatedProduct;
                Alert.alert('Product quantity has been increased.');
                console.log('New cart:', newCart);
                await cartRef.update({
                    cart: newCart,
                });
                dispatch({ type: ADD_TO_CART, payload: updatedProduct });
            } else {
                const productWithQuantity = { ...product, quantity: 1 };
                const newCart = [...cartItems, productWithQuantity];
                Alert.alert('The product has been added to cart.');
                console.log('New cart:', newCart);
                await cartRef.update({
                    cart: newCart,
                });
                dispatch({ type: ADD_TO_CART, payload: productWithQuantity });
            }
        } else {
            const productWithQuantity = { ...product, quantity: 1 };
            await cartRef.set({
                cart: [productWithQuantity],
            });
            dispatch({ type: ADD_TO_CART, payload: productWithQuantity });
        }

    } catch (error) {
        console.log(error);
        dispatch({ type: ADD_TO_CART_FAIL, payload: error.message });
    }
};

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });

    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        console.log('Stored user ID:', storedUserId);
        const cartRef = firestore().collection('users').doc(storedUserId).collection('cart').doc('default');
        const cartDoc = await cartRef.get();

        if (cartDoc.exists) {
            const cartItems = cartDoc.data().cart;
            console.log('Cart items:', cartItems);
            dispatch({ type: GET_CART_SUCCESS, payload: cartItems });
        } else {
            dispatch({ type: GET_CART_FAIL, payload: 'Cart is empty.' });
        }

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_CART_FAIL, payload: error.message });
    }
};

export const increaseQuantity = (product, item) => async (dispatch) => {
    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        const cartRef = firestore()
            .collection('users')
            .doc(storedUserId)
            .collection('cart')
            .doc('default');
        const cartDoc = await cartRef.get();

        if (cartDoc.exists) {
            const cartItems = cartDoc.data().cart;
            const existingProductIndex = cartItems.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                const existingProduct = cartItems[existingProductIndex];
                const updatedProduct = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1,
                };
                const newCart = [...cartItems];
                newCart[existingProductIndex] = updatedProduct;

                await cartRef.update({
                    cart: newCart,
                });

                dispatch({ type: INCREASE_QUANTITY, payload: updatedProduct });
            } else {
                console.log('Product not found in cart.');
            }
        } else {
            console.log('Cart not found.');
        }
    } catch (error) {
        console.log(error);
    }
};

export const decreaseQuantity = (product, item) => async (dispatch) => {
    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        const cartRef = firestore()
            .collection('users')
            .doc(storedUserId)
            .collection('cart')
            .doc('default');
        const cartDoc = await cartRef.get();

        if (cartDoc.exists) {
            const cartItems = cartDoc.data().cart;
            const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {
                const existingProduct = cartItems[existingProductIndex];
                const updatedQuantity = existingProduct.quantity - 1;

                if (updatedQuantity === 0) {
                    // Xóa sản phẩm khỏi giỏ hàng nếu quantity bằng 0
                    const newCart = cartItems.filter((item) => item.id !== product.id);
                    await cartRef.update({
                        cart: newCart,
                    });
                } else {
                    const updatedProduct = {
                        ...existingProduct,
                        quantity: updatedQuantity,
                    };
                    const newCart = [...cartItems];
                    newCart[existingProductIndex] = updatedProduct;
                    await cartRef.update({
                        cart: newCart,
                    });
                    dispatch({ type: DECREASE_QUANTITY, payload: updatedProduct });
                }
            } else {
                console.log('Product not found in cart.');
            }
        } else {
            console.log('Cart not found.');
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = (product,item) => async (dispatch) => {
    try {
        const storedUserId = await AsyncStorage.getItem('storage');
        const cartRef = firestore()
            .collection('users')
            .doc(storedUserId)
            .collection('cart')
            .doc('default');
        const cartDoc = await cartRef.get();

        if (cartDoc.exists) {
            const cartItems = cartDoc.data().cart;
            const updatedCart = cartItems.filter((item) => item.id !== product.id);

            await cartRef.update({
                cart: updatedCart,
            });

            dispatch({ type: DELETE_PRODUCT, payload: product });
        } else {
            console.log('Cart not found.');
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.message });
    }
};