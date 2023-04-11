import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../redux-store/actions/category';
import { filterProductsByCategory } from '../../../redux-store/actions/product';
export const CategoryList = () => {
    const dispatch = useDispatch();
    const categoriesState = useSelector(state => state.categories);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
        dispatch(filterProductsByCategory(category.name))
        
    };
    console.log("Check", categoriesState.categories);
    return (
        <View>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', backgroundColor: "black" }}>
                    {categoriesState.categories && categoriesState.categories.map(category => (
                        <TouchableOpacity key={category.id} onPress={() => handleCategoryPress(category)} style={[styles.categoryButton, selectedCategory?.id === category.id && styles.selectedCategoryButton]}>
                            <Text style={[styles.categoryButtonText, selectedCategory?.id === category.id && styles.selectedCategoryButtonText]}>{category.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        // backgroundColor: 'lightgray',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    selectedCategoryButton: {
        // backgroundColor: 'green',
    },
    categoryButtonText: {
        color: 'gray',
    },
    selectedCategoryButtonText: {
        color: 'white',
    },
});