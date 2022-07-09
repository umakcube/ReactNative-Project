
import { Alert, SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import Dialog from "react-native-dialog";
// import SignUpScreen from './Navigation/screens/SignUpScreen';

const HomeScreen = ({ navigation }) => {
    const [showText, setShowText] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };
   
    // useEffect(() => {
    //   // Change the state every second or the time given by User.
    //   const interval = setInterval(() => {
    //     setShowText((showText) => !showText);
    //   }, 1000);
    //   return () => clearInterval(interval);
    // }, []);
   
    return (
     
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleText}>
           Welcome 
          </Text>
        
        </View>
        {/* <Text
            style={[
              styles.textStyle,
              {display: showText ? 'none' : 'flex'}
            ]}>
            Please Enter Your Details To Login....
          </Text>  */}
        <Image style={{width:300, height:300, left:50}}  source = {require("../assets/signin.png")}/> 
        <Text style={{fontSize:25,fontWeight:'500',color:'#FF1493' ,textAlign:'center'}}> User Name</Text>
        <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter your UserName."
    placeholderTextColor="#003f5c"
    onChangeText={(userName) => setUserName(userName)}
  />
</View>
 <Text style={{fontSize:25,fontWeight:'500',color:'#FF1493' ,textAlign:'center'}}> Password</Text>

<View style={styles.inputView}>
<TextInput
    style={styles.TextInput}
    placeholder="Enter your Password"
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<TouchableOpacity>
        <Text style={styles.forgot_button} onPress={showDialog}>
        <Dialog.Container visible={visible}>
        <Dialog.Title>Re-set Password</Dialog.Title>
        <Dialog.Description>
        Your New Password has send to your mail Id.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Ok" onPress={handleOk} />
      </Dialog.Container> 
      Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity>
  <Text style={styles.signup}>
  Already have an account ? SIGNUP</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText} onPress={() => navigation.navigate('Details')} >LOGIN</Text>
</TouchableOpacity>
      </SafeAreaView>
    );
  };
   
  const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      padding: 20,
    },
    titleText: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#FF1493',
    },
    textStyle: {
      textAlign: 'center',
      marginTop: 10,
      color: 'blue',
    },
    loginBtn: {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#FF1493",
   marginLeft: 40,
 },
 inputView: {
  backgroundColor: "#FFC0CB",
  borderRadius: 30,
  width: "70%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
  marginLeft: 50,
},
 TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
  marginLeft: 10,
},
forgot_button: {
  height: 30,
  marginLeft: 200,
  marginBottom: -20,
  fontWeight: '800',
},
signup: {
  top: 20,
  marginLeft: 100,
  fontWeight: '800',
}
  });

  export default HomeScreen;