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
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainContainer from './navigation/MainContainer';

// const Stack = createNativeStackNavigator();

const HomePage = () => {
  return (
    <Text>hai </Text>
    //  <NavigationContainer>
    //    <Stack.Navigator>
    //      <Stack.Screen name="Initial" component={MainContainer} />
    //    </Stack.Navigator>
    //    <Stack.Navigator>
    //      <Stack.Screen name="slider" component={Slider_Example} />
    //    </Stack.Navigator>
    //  </NavigationContainer>
  );
};

export default HomePage;
