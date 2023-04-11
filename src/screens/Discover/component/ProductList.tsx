import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux-store/actions/product";
import { View, Text,FlatList, ScrollView } from "react-native";

export const ProductList = () => {
  const dispatch = useDispatch();
  const productStage = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  console.log("Danh sách sản phẩm", productStage.productList);

  return (
    <View>
      <Text style={{ color: "black" }}>Danh sách sản phẩm</Text>
      {productStage.productList.length ? (
        productStage.productList.map((product) => (
          <View key={product.id}>
            <Text style={{ color: "black" }}>{product.name}</Text>
            <Text>{product.price}</Text>
          </View>
        ))
      ) : (
        <Text style={{ color: "black" }}>Chưa có sản phẩm</Text>
      )}
    </View>
  );
};