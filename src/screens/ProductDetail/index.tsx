import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { getProductById } from "../../redux-store/actions/product";
import { GoBack } from "../../component";
import { styles } from "./styles";
import { addToCart } from "../../redux-store/actions/cart";
import { addtoFavourite, removeFromFavourite } from "../../redux-store/actions/favourite";
import CurrencyInput from 'react-native-currency-input';
export const Detail = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const { id } = route.params;

    useEffect(() => {
        dispatch(getProductById(id));
    }, [isFavourite]);
    const product = useSelector((state) => state.products.product);
    console.log("Product", product)

    const handleAddToCart = () => {
        console.log("add to cart")
        dispatch(addToCart(product))
    }
    const favoritesItem = useSelector((state) => state.favorites.favoritesItem)
    const isFavourite = favoritesItem.some(item => item.id === product.id)
    const handleAddToFavourites = () => {
        if (isFavourite) {
            console.log(isFavourite)
            dispatch(removeFromFavourite(id))
        }
        else {
            console.log("add to yêu thích")
            dispatch(addtoFavourite(product))
        }
    }

    if (!product) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <GoBack title="PICKSNEAK" />
            <ScrollView>
                <View style={styles.wrapper}>
                    <Swiper showsButtons={false}
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={[styles.dot, styles.activeDot]} />}
                    >
                        {product.images.map((image, index) => (
                            <View key={index} style={styles.slide}>
                                <Image resizeMode="cover" style={styles.image} source={{ uri: image }} />
                            </View>
                        ))}
                    </Swiper>
                </View>
                <View style={styles.boxDetail}>
                    <View>
                        <Text style={styles.titleProduct}>
                            {product.name}
                        </Text>
                    </View>
                    <View>
                        <CurrencyInput
                            value={product.price}
                            prefix="₫"
                            delimiter="."
                            precision={0}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', maxHeight: 500 }}>
                    <TouchableOpacity onPress={() => handleAddToCart()} style={styles.boxButton} activeOpacity={0.9}>
                        <View style={styles.boxButtonCart}>
                            <Text style={styles.ButtonTitle}>Giỏ hàng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAddToFavourites()} style={styles.boxButton} activeOpacity={0.9}>
                        <View style={isFavourite ? styles.boxButtonLoveRed : styles.boxButtonLove}>
                            <Text style={isFavourite ? styles.ButtonTitleLoveRed : styles.ButtonTitleLove}>Yêu thích</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center',paddingTop:15 }}>
                    <Text style={{ fontSize: 18 }}>
                        {product.color}
                    </Text>
                </View>
                <View style={styles.boxDescripton}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>
                            {product.description}
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>
                            {product.description}
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text>
                            {product.style}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};