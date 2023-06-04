import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    c_box_address: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        // backgroundColor: 'red',
    },
    c_location: {
        width: '15%',
        // backgroundColor:'blue',
        alignItems: 'center'
    },
    c_address: {
        width: "70%",
        // backgroundColor:'green'
    },
    c_address_text: {
        fontWeight: 'bold'
    },
    c_text: {
        color: '#FF99CC'
    },
    c_box_Images: {
        alignItems: 'center',
        // backgroundColor: '',
        paddingHorizontal: 0
    },
    c_box_Product: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bottomView: {
        justifyContent: 'flex-end',
        top: 180,
    },
    orderInfo: {
        // backgroundColor: 'pink',
        paddingHorizontal: 10,
        marginVertical: 2,
        overflow: "hidden",
        // padding: 10,
    },
    yourOrderTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    yourOrderText: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    checkoutButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '95%',
        left: 8
    },
    checkoutButtonText: {
        color: '#000',
        fontSize: 16,
    },
});





