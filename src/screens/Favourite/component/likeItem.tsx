import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput from 'react-native-currency-input';
import { useSelector, useDispatch } from "react-redux";
import { PanGestureHandler } from 'react-native-gesture-handler';
import { addToCart } from '../../../redux-store/actions/cart';
import { removeFromFavourite } from '../../../redux-store/actions/favourite';
export const LikeItem = ({ item }) => {
    const dispatch = useDispatch();
    const [offsetX, setOffsetX] = useState(0);
    const [shouldShowRemoveButton, setShouldShowRemoveButton] = useState(false);

    const handleProductId = async () => {
        dispatch(addToCart(item));
    };
    const handleGestureEvent = e => {
        setOffsetX(e.nativeEvent.translationX);
        setShouldShowRemoveButton(e.nativeEvent.translationX < -60);
    };

    const handleGestureEnd = () => {
        setOffsetX(shouldShowRemoveButton ? -80 : 0);
    };
    const handleRemove = async (id) => {
        console.log("Remove", id)
        dispatch(removeFromFavourite(id));
    }
    return (
        <PanGestureHandler onGestureEvent={handleGestureEvent} onEnded={handleGestureEnd}>
            <View style={[styles.boxCart, { transform: [{ translateX: offsetX }] }]}>
                <View style={styles.cartItem}>
                    <View style={styles.itemInfo}>
                        <Image source={{ uri: item.imageProduct }} style={styles.itemImage} />
                        <View>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <CurrencyInput style={styles.itemPrice} value={item.price} prefix="₫" delimiter="." precision={0} />
                        </View>
                    </View>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={() => handleProductId()} activeOpacity={0.9}>
                            <Icon name="cart" size={30} color="#888" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.removeItemContainer}>
                    {shouldShowRemoveButton && (
                        <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.removeItemButton} activeOpacity={0.8}>
                            <Icon name="delete" size={24} color="red" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </PanGestureHandler>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

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
    removeItemContainer: {
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: [{ translateY: -12 }],
        // backgroundColor: 'red'
    },
    removeItemButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
});