import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux-store/actions/product";
import { getProductById } from "../../../redux-store/actions/product";
import { View, Text, FlatList, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import FontAwesome from 'react-native-vector-icons//FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { addtoFavourite } from "../../redux-store/actions/favourite";
import CurrencyInput from "react-native-currency-input";
export const ProductList = () => {
  const dispatch = useDispatch();
  const productStage = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const navigation = useNavigation();
  const handleProductId = async (id) => {
    navigation.navigate("Detail", { id });
  };
  const handleAddToFavourites = () => {
    console.log("add to yêu thích")

  }
  return (
    <FlatList
      key={productStage.productList.length}
      data={productStage.productList}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleProductId(item.id)}>
            <View style={styles.productImageContainer}>
              <Image resizeMode='contain' style={styles.productImage} source={{ uri: item.imageProduct }} />
            </View>
            <View style={styles.productInfoContainer}>
              <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <View style={styles.productColorContainer}>
                <Text style={styles.productColor}>{item.style}</Text>
              </View>
              <View style={styles.productPriceContainer}>
                <CurrencyInput style={styles.productPrice} precision={0} prefix="₫" value={item.price} />
              </View>
            </View>
          </TouchableOpacity>
          {/* <View style={styles.productButtonContainer}>
            <TouchableOpacity activeOpacity={0.7} style={[styles.productButton, { justifyContent: 'flex-start' }]}>
              <MaterialIcons name="remove-red-eye" size={30} color="#fff" />
              <Text style={styles.productButtonText}>Xem</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      )}
      ListEmptyComponent={() => (
        <Text style={styles.emptyListText}>Loại sản phẩm này chưa được cập nhật</Text>
      )}
    />
  );
};
const styles = StyleSheet.create({
  productContainer: {
    width: '45%',
    marginHorizontal: 10,
    // marginVertical: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  productImageContainer: {
    height: 300,
    overflow: 'hidden',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfoContainer: {
    // padding: 5,
  },
  productName: {
    color: '#FFF',
    fontSize: 18,
    // marginBottom: 5,
  },
  productColorContainer: {
    flexDirection: 'row',
    // marginBottom: 5,
  },
  productColor: {
    color: 'gray',
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPriceLabel: {
    color: '#666',
    marginRight: 5,
  },
  productPrice: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productCurrency: {
    color: '#666',
    marginLeft: 5,
  },
  productButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingBottom: 20,
    // paddingTop: 10,
  },
  productButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '',
    paddingVertical: 5,
    // paddingHorizontal: 10
  },
  productButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  emptyListText: {

  },
})