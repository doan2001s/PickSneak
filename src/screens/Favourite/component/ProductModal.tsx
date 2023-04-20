import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

interface Product {
    id: string,
    name: string,
    imageProduct: string,
    style: string
}

interface IProductModal extends Product {
    showModal: boolean,
    onCloseModal: () => void;
}

export const ProductModal = (props: IProductModal) => {
    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.modalContent}>
                <View style={{ height: "50%", alignItems: "center" }}>
                    <Image source={{ uri: props.imageProduct }} style={styles.productImage} />
                    <Text style={styles.productName}>{props.name}</Text>
                    <Text style={styles.productPrice}>{props.price} USD</Text>
                    <TouchableOpacity onPress={props.onCloseModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: 20,
        height:"80%"
    },
    productImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 18,
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#f00',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
