import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import { styles } from './style';
import { AppHeader } from '../../component';
import { CartItem } from './component/cartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux-store/actions/cart';
import { useFocusEffect } from '@react-navigation/native';
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

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="CART" fontSize={18} />
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Chưa có sản phẩm nào trong giỏ hàng</Text>
      )}
    </SafeAreaView>
  );
};