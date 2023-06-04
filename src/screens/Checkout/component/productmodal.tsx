import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from "react-native";
import Modal from "react-native-modal";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput from "react-native-currency-input";

interface IModalProps {
    isVisible: boolean,
    toggleModalProduct: () => void;
}

export const ProductCartModal = (props: IModalProps) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.carts.cartItems);
    console.log("View All", cartItems);
    const [totalPrice, setTotalPrice] = useState(0);

    const renderItem = ({ item }) => {
        const totalPrice = item.price * item.quantity;
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
                        <Text style={styles.quantity}>X{item.quantity}</Text>
                    </View>
                </View>
                <View style={styles.itemTotalContainer}>
                    <CurrencyInput
                        style={styles.itemTotal}
                        value={totalPrice}
                        prefix="₫"
                        delimiter="."
                        precision={0}
                    />
                </View>
            </View>
        )
    };

    return (
        <Modal visible={props.isVisible} animationIn="slideInUp" animationOut="slideOutDown">
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>Sản phẩm</Text>
                    <TouchableOpacity onPress={props.toggleModalProduct}>
                        <EvilIcons name="close" color='#000' size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#000'
    },
    content: {
        backgroundColor: '#fff',
        padding: 20
    },
    boxCart: {
        width: '100%',
        height: 150,
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
        color: "#000"
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
        color: '#000'
    },
    itemTotalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        width: "90%"
    },
    itemTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 'auto',
        color: '#000'
    },
    removeItemButton: {
        padding: 5,
        marginLeft: 'auto',
    },
});