import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput from 'react-native-currency-input';
import { ProductModal } from './ProductModal';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../../redux-store/actions/cart';
export const LikeItem = ({ item }) => {
    const product = useSelector((state) => state.products.product);
    const dispatch = useDispatch();
    const handleProductId = async () => {
        dispatch(addToCart(item))
    }
    return (
        <View style={styles.boxCart}>
            <View style={styles.cartItem}>
                <View style={styles.itemInfo}>
                    <Image source={{ uri: item.imageProduct }} style={styles.itemImage} />
                    <View>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <CurrencyInput
                            style={styles.itemPrice}
                            value={item.price}
                            prefix="₫"
                            delimiter="."
                            precision={0}
                        />
                    </View>
                </View>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => handleProductId()} activeOpacity={0.9}>
                        <Icon name="cart" size={30} color="#888" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <ProductModal showModal={showModal} onCloseModal={handleCloseModal} {...item} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    boxCart: {
        width: '100%',
        height: 120,
        // backgroundColor: '',
        alignItems: 'center',
        marginTop: 20,
        borderBottomWidth: 0.8,
        borderBottomColor: 'silver',

    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        // backgroundColor: '',
        height: 100,
        paddingHorizontal: 10,
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        backgroundColor: 'white'
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        color: "#fff"
    },
    itemPrice: {
        fontSize: 16,
        color: '#888',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
        color: '#fff'
    },
    itemTotalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        width: "90%"
    },
    itemTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 'auto',
    },
    removeItemButton: {
        padding: 5,
        marginLeft: 'auto',
    },
});