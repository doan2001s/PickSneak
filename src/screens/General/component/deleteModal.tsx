import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { deleteAccount } from "../../../redux-store/actions/auth";

interface IModalProps {
    isVisible: boolean;
    toggleModal: () => void;
}

export const DeleteModal = (props: IModalProps) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteAccount(navigation))
    }

    return (
        <Modal visible={props.isVisible} animationIn="slideInUp" animationOut="slideOutDown">
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>Xóa tài khoản</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.titleText}>
                        Bạn có muốn xóa tài khoản của bạn không? Tất cả dữ liệu của bạn cũng sẽ bị xóa theo.
                    </Text>
                </View>
                <View style={styles.Cancelcontainer}>
                    <TouchableOpacity onPress={props.toggleModal} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete()} style={styles.deleteButton}>
                        <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        textAlign: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#000',
        // textAlign: 'center'

    },
    content: {
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    titleText: {
        color: '#000',
        textAlign: 'center'
    },
    Cancelcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    cancelButton: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});