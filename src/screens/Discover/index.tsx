import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { styles } from "./style";
import { AppHeader } from "../../component/Header";
import { CategoryList } from "./component/CategoryList";
import { ProductList } from "./component/ProductList";
export const Discover = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: "100%" }}>
            <AppHeader title="PICKSNEAK" fontSize={18} />
            <CategoryList />
            <ProductList />
        </SafeAreaView>
    );
};