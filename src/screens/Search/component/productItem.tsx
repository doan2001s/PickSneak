import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux-store/actions/product";
import { getProductById } from "../../../redux-store/actions/product";
import { View, Text, FlatList, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput } from "react-native";
import FontAwesome from 'react-native-vector-icons//FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const { height } = Dimensions.get('window');
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
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(null);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (!searchValue) {
            setShowList(false);
        }
    }, [searchValue]);

    const handleSearch = () => {
        const newData = productStage.productList.filter((item) => {
            const itemName = item.name.toLowerCase();
            return itemName.indexOf(searchValue.toLowerCase()) > -1;
        });
        setFilteredData(newData);
        setShowList(true);
    };

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        value={searchValue}
                        onChangeText={setSearchValue}
                    />
                </View>
                <TouchableOpacity onPress={() => handleSearch()} style={styles.filterButton} activeOpacity={0.8} >
                    <Icon name="search" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            {showList && (
                <View>
                    {filteredData ? (
                        <FlatList
                            data={filteredData}
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
                        />
                    ) : (
                        <Text>Không tìm thấy sản phẩm nào</Text>
                    )}
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: 'gray',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    searchInput: {
        flex: 1,
        padding: 8,
    },
    filterButton: {
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    filterView: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        height: height * 0.8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 16,
    },
    closeButton: {
        backgroundColor: '#f2f2f2',
        padding: 12,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 16,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});