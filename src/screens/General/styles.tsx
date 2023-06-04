import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    Touchcontainer: {
        flexDirection: 'row',
        padding: 15,
        // backgroundColor: '#',

        alignItems: 'center',
        paddingHorizontal: 10,

    },
    iconContainer: {
        marginRight: 10,
    },
    icon: {
        fontSize: 24,
        color: '#fff',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#FFF',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
})