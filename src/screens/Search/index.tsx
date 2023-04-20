import React from 'react'
import { SafeAreaView } from 'react-native'
import { AppHeader } from '../../component'
import { styles } from './styles'
import { SearchItem } from './component/seachItem'
import { ProductList } from './component/productItem'


export const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppHeader title="PICKSNEAK" fontSize={18} />
            <ProductList />
            {/* <SearchItem/> */}
        </SafeAreaView>
    )
}