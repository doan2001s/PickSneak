import React, { useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { AppHeader, GoBack } from "../../component";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getFavourite } from "../../redux-store/actions/favourite";
import { useFocusEffect } from '@react-navigation/native';
import { LikeItem } from "./component/likeItem";
export const Favourite = () => {
    const dispatch = useDispatch();
    const favoritesItem = useSelector(state => state.favorites.favoritesItem)
    console.log("Danh sách", favoritesItem)
    useFocusEffect(
        React.useCallback(() => {
            const intervalId = setInterval(() => {
                dispatch(getFavourite());
            }, 100);

            return () => clearInterval(intervalId);
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <GoBack title='PICKSNEACK' />
            {favoritesItem.length > 0 ? (
                <FlatList
                    data={favoritesItem}
                    renderItem={({ item }) => <LikeItem item={item} />}
                    keyExtractor={item => item.id}
                />
            ) : (
                <Text>Chưa có sản phẩm yêu thích nào</Text>
            )}
        </SafeAreaView>
    )
};