import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:'black'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    topSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgLogo: {
        backgroundColor: ''
    },
    middleSection: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:'#000',
        
    },
    buttonSignIn: {
        borderRadius: 10,
        backgroundColor:'#ff5a60',
        opacity: 0.8,
        padding: 10,
        width: '80%',
        top: 20,
        alignItems: 'center',
        color: '#eee'
    },
    buttonSignUp: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        opacity: 0.8,
        padding: 10,
        width: '80%',
        top: 20,
        alignItems: 'center',
        color: '#eee',
        
    },
    bottomSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});





