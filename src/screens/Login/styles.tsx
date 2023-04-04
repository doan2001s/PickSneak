import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000',
    // flexDirection:'column'
  },
  topSection: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    flex: 2,
  },
  middleSection: {
    flex: 2,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'#000',

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  inputIcon: {
    marginRight: 10,
  },
  // input: {
  //   flex: 1,
  //   paddingVertical: 10,
  //   fontSize: 18,
  //   color: 'gray',
  // },
  passwordToggle: {
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: '#ff5a60',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    color:'gray',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  passwordInput: {
    height: 50,
    paddingHorizontal: 10,
    flex: 1,
    color:'gray'
  },
  iconButton: {
    padding: 10,
  },
  button: {
    backgroundColor: 'silver',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    alignSelf: 'flex-end',
  },
  linkText: {
    color: 'silver',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    marginRight: 5,
    color:'silver'
  },
  signupLink: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  signupLinkText: {
    color: 'silver',
    fontWeight: 'bold',
  },
  messError:{
    color:'red',
    bottom:10
  }
});





