import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.border}>
        <Text style={styles.text}>Hi, Krithika Raa</Text>
        <Image style={styles.card} source = {require("../assets/ncashcard.png")}/>
        <View style={styles.container}>
              <View style={{  backgroundColor: "#e5e4e2", width:180,height:205, borderRadius:9}} >
              <Text style ={{top: 20, left:10,color:"#4682B4",fontSize:20,fontWeight:"normal"}}>FBA Wallet </Text>
              <Image style={{top: 30,left:50}}  source = {require("../assets/burger.png")}/> 
              <Text style ={{top: 40, left:50,color:"#4682B4",fontSize:17,fontWeight:"normal"}}>Balance </Text>
              <Text style ={{top: 40, left:25,color:"#4682B4",fontSize:23,fontWeight:"normal"}}>₹ 25,417.00 </Text>  
              </View>
              <View style={{  backgroundColor: "#e5e4e2",  width:180, height:205, borderRadius:9, right:15 }} >
              <Text style ={{top: 20, left:10,color:"#4682B4",fontSize:20,fontWeight:"normal"}}>Expense Wallet </Text> 
              <Image style={{top: 30,left:60}}  source = {require("../assets/plane.png")}/> 
              <Text style ={{top: 40, left:50,color:"#4682B4",fontSize:17,fontWeight:"normal"}}>Balance </Text>
              <Text style ={{top: 40, left:45,color:"#4682B4",fontSize:23,fontWeight:"normal"}}>₹ 94.00 </Text>  
              </View>
        </View>
        <View style={styles.subcontainer}>
              <View style={{  backgroundColor: "#e5e4e2", width:180, height:205, borderRadius:9}} >
              <Text style ={{top: 20, left:10,color:"#4682B4",fontSize:20,fontWeight:"normal"}}>Claims </Text>
              <Image style={{top: 30,left:50}}  source = {require("../assets/wallet.png")}/> 
              <Text style ={{top: 40, left:40,color:"#4682B4",fontSize:17,fontWeight:"normal"}}>Applied claim </Text>
              <Text style ={{top: 40, left:30,color:"#4682B4",fontSize:23,fontWeight:"normal"}}>₹ 77,349.00 </Text>  
              </View>
              <View style={{  backgroundColor: "#e5e4e2",  width:180, height:205, borderRadius:9, right:15 }} >
              <Text style ={{top: 20, left:10,color:"#4682B4",fontSize:20,fontWeight:"normal"}}>De'tax Score </Text> 
              <Image style={{top: 30,left:60}}  source = {require("../assets/hand.png")}/> 
              <Text style ={{top: 35, left:40,color:"#4682B4",fontSize:17,fontWeight:"normal"}}>Savings score </Text>
              <Text style ={{top: 35, left:60,color:"#4682B4",fontSize:23,fontWeight:"normal"}}>6/10 </Text>  
              </View>
        </View>  
        </View>
      
          );
        }
        
        const styles = StyleSheet.create({
          border: {
             top:1,
            height: 695,
            borderColor: '#e5e4e2',
            borderWidth: 3,
            borderRadius: 9,
            // fontFamily: "SFUIDisplay-Semibold",
            
          },
          text: {
            fontSize:20,
            left:8,
            fontWeight: "500",
            top:5,
            opacity: 2,
        },
        card: {
          top: 20,
          left:7,
          right: 5,
          width: 370,
          height: 170,
          borderRadius: 9,
        },
        container: {
          top:40,
          left:9,
          flex: 1,
          flexDirection: "row",
          justifyContent:"space-between",
        },
        subcontainer: {
          top:10,
          left:9,
          flex: 1,
          flexDirection: "row",
          justifyContent:"space-between",
        },
        
        });
        