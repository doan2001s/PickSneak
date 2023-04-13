import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux-store/actions/product";
import { getProductById } from "../../../redux-store/actions/product";
import { View, Text, FlatList, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons//FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

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
  return (
    <FlatList
      data={productStage.productList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleProductId(item.id)}>
            <View>
              <Image style={{ width: "100%", height: 300 }} source={{ uri: item.imageProduct }} />
            </View>
            <View>
              <Text>{item.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>Giá:</Text><Text>{item.price}</Text><Text>VND</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text>Style:</Text><Text>{item.style}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="favorite" />
              <Text style={{ marginLeft: 5 }}>Yêu thích</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="shopping-cart" />
              <Text style={{ marginLeft: 5 }}>Mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      ListEmptyComponent={() => (
        <Text>Loại sản phẩm này chưa được cập nhật</Text>
      )}
    />
  );
};


const styles = StyleSheet.create({

})