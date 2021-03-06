
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import MainContainer from './Navigation/MainContainer';
 //import SignUpScreen from './Navigation/screens/SignUpScreen';
 
 // const Section = ({children, title}): Node => {
 //   const isDarkMode = useColorScheme() === 'dark';
 //   return (
 //     // <View style={styles.sectionContainer}>
     //   <Text
     //     style={[
     //       styles.sectionTitle,
     //       {
     //         color: isDarkMode ? Colors.white : Colors.black,
     //       },
     //     ]}>
     //     {title}
     //   </Text>
     //   <Text
     //     style={[
     //       styles.sectionDescription,
     //       {
     //         color: isDarkMode ? Colors.light : Colors.dark,
     //       },
     //     ]}>
     //     {children}
     //   </Text>
     //   <MainContainer />
     // </View>
 //   );
 // };
 
 const App: () => Node = () => {

   return (
     // <SafeAreaView style={backgroundStyle}>
     //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
     //   <ScrollView
     //     contentInsetAdjustmentBehavior="automatic"
     //     style={backgroundStyle}>
    //  //     {/* <Header /> */}
          <MainContainer />
    
   
       );
     };
     
     
     
 
 
 export default App;
 
