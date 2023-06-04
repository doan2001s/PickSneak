import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { GoBack } from "../../component";
import { AddressModal } from "./component/addressmodal";
import { ProductCartModal } from "./component/productmodal";
import { useSelector, useDispatch } from "react-redux";
import CurrencyInput from "react-native-currency-input";
export const Checkout = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        console.log("modal")
        setModalVisible(!isModalVisible);
    };

    const [isModalVisibleProduct, setModalVisibleProduct] = useState(false);

    const toggleModaleProduct = () => {
        setModalVisibleProduct(!isModalVisibleProduct)
    }

    const cartItems = useSelector(state => state.carts.cartItems);
    const [totalCartPrice, setTotalCartPrice] = useState(0);

    useEffect(() => {
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalCartPrice(totalPrice);
    }, [cartItems]);
    console.log("totalCartPrice", totalCartPrice)
    return (
        <View style={styles.container}>
            <GoBack title="DELIVERY" />
            <View style={styles.c_box_address}>
                <View style={styles.c_location}>
                    <Image source={require('../../../asset/images/icons8-address-30.png')} />
                </View>
                <View style={styles.c_address}>
                    <View>
                        <Text>
                            Địa chỉ
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.c_address_text}>

                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity onPress={() => toggleModal()}>
                            <Text style={styles.c_text}>
                                Thay đổi
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <AddressModal isVisible={isModalVisible} toggleModal={toggleModal} />
                </View>
            </View>
            <View style={styles.c_box_Images}>
                <Image
                    resizeMode="center"
                    source={require('../../../asset/images/istockphoto.jpg')}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <View style={styles.c_box_Product} >
                <View>
                    <Text>
                        ({cartItems.length}) Sản phẩm
                    </Text>
                </View>
                <View>
                    <View>
                        <TouchableOpacity onPress={() => toggleModaleProduct()}>
                            <Text style={styles.c_text}>
                                Xem tất cả
                            </Text>
                        </TouchableOpacity>
                        <ProductCartModal isVisible={isModalVisibleProduct} toggleModalProduct={toggleModaleProduct} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomView}>
                <View>
                    <View style={styles.orderInfo}>
                        <View style={styles.yourOrderTextContainer}>
                            <Text style={styles.yourOrderText}>Subtotal:</Text>
                            <CurrencyInput
                                style={styles.yourOrderText}
                                value={totalCartPrice}
                                prefix="₫"
                                delimiter="."
                                precision={0}
                            />
                        </View>
                    </View>
                    <View style={styles.orderInfo}>
                        <View style={styles.yourOrderTextContainer}>
                            <Text style={styles.yourOrderText}>
                                Fee
                            </Text>
                            <CurrencyInput
                                style={styles.yourOrderText}
                                value="0"
                                prefix="₫"
                                delimiter="."
                                precision={0}
                            />
                        </View>
                    </View>
                    <View style={styles.orderInfo}>
                        <View style={styles.yourOrderTextContainer}>
                            <Text style={styles.yourOrderText}>Subtotal:</Text>
                            <CurrencyInput
                                style={styles.yourOrderText}
                                value={totalCartPrice}
                                prefix="₫"
                                delimiter="."
                                precision={0}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => checkoutHandler()} style={styles.checkoutButton}>
                        <Text style={styles.checkoutButtonText}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}