import React, { useState } from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import { GoBack } from "../../component";
import { styles } from "./styles";
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { DeleteModal } from "./component/deleteModal";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux-store/actions/auth";
import { useNavigation } from '@react-navigation/native';
export const General = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        console.log("modal")
        setModalVisible(!isModalVisible);
    };

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser(navigation))
    }

    return (
        <View style={styles.container}>
            <GoBack title="PICKSNEAK" />
            <View>
                <TouchableOpacity onPress={()=>handleLogout()} style={styles.Touchcontainer}>
                    <View style={styles.iconContainer}>
                        <Feather name="log-out" style={styles.icon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Đăng xuất
                        </Text>
                        <Text style={styles.subtitle}>
                            Đăng xuất tài khoản
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleModal()} style={styles.Touchcontainer}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="delete" style={styles.icon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Xóa tài khoản
                        </Text>
                        <Text style={styles.subtitle}>
                            Xóa tài khoản và dữ liệu
                        </Text>
                    </View>
                </TouchableOpacity>
                <DeleteModal isVisible={isModalVisible} toggleModal={toggleModal} />
            </View>
        </View>
    )
}