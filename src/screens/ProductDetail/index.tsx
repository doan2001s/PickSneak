import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { getProductById } from "../../redux-store/actions/product";

export const Detail = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const { id } = route.params;

    useEffect(() => {
        dispatch(getProductById(id));
    }, []);

    const product = useSelector((state) => state.products.product);
    console.log("Product", product);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Detail</Text>
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                    <Text style={styles.text}>Slide 1</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Slide 2</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Slide 3</Text>
                </View>
            </Swiper>
            <View>
                <Text style={{ color: "black" }}>
                    Sản phẩm có ID là
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    wrapper: {
        width: "100%",
        height: 300,
        marginBottom: 20,
    },
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9DD6EB",
    },
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
    },
});