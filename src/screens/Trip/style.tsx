import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    bottomView: {
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    orderInfo: {
        backgroundColor: '#000',
        padding: 10,
        // alignItems: 'center',
    },
    yourOrderTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    yourOrderText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
       
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
})