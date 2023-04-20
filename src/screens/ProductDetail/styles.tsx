import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    wrapper: {
        width: "100%",
        height: 300,
        marginBottom: 20,
    },
    slide: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: 280,
        resizeMode: "cover",
    },
    dot: {
        backgroundColor: "gray",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: "black",
    },
    boxDetail: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleProduct: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 18
    },
    boxButtonCart: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50
    },
    boxButtonLove: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        // backgroundColor: 'white',
        top: 10,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1
    },
    boxButton: {
        // width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        backgroundColor: 'black',
    },
    ButtonTitle: {
        color: 'black',
        fontWeight: '700',
        fontSize: 15
    },
    ButtonTitleLove: {
        color:'#fff',
        fontWeight: '700',
        fontSize: 15
    },
    boxDescripton:{
       marginTop:20
    },
})