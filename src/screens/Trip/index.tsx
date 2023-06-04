import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import { styles } from './style';
import { AppHeader } from '../../component';
import { CartItem } from './component/cartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux-store/actions/cart';
import { useFocusEffect } from '@react-navigation/native';
import CurrencyInput from 'react-native-currency-input';
import { useNavigation } from '@react-navigation/native';
export const CartScreen = () => {
  // const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.carts.cartItems)
  console.log("Danh sách cart", cartItems)
  const [trigger, setTrigger] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrigger(!trigger);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [trigger]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, trigger]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalCartPrice(totalPrice);
  }, [cartItems]);
  console.log("totalCartPrice", totalCartPrice)

  const navigation = useNavigation();
  const checkoutHandler = () => {
    navigation.navigate("Checkout")
    // navigation.navigate("Delivery")
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="CART" fontSize={18} />
      <View style={{ flex: 1 }}>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text>Chưa có sản phẩm nào trong giỏ hàng</Text>
        )}
        {cartItems.length > 0 ? (
          <View style={styles.bottomView}>
            <View style={styles.orderInfo}>
              <View style={styles.yourOrderTextContainer}>
                <Text style={styles.yourOrderText}>Your Order:</Text>
                <CurrencyInput
                  style={styles.yourOrderText}
                  value={totalCartPrice}
                  prefix="₫"
                  delimiter="."
                  precision={0}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => checkoutHandler()} style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Thanh toán</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) :
          null
        }
      </View>
    </SafeAreaView>
  );
};