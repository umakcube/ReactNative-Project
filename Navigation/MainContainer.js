

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button,StyleSheet,View,Text} from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = "SignIn";
const detailsName = "Details";
const settingsName = "Music";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
   
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, style }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ?  'people' : 'people-outline';
              //iconName = focused ?  < Text size={40} /> : <Text size={25} />;

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'ios-musical-notes' : 'musical-notes-outline';
            }
            return <Ionicons  name={iconName} size={25} color={color}   />;
          },
        
        })}
        tabBarOptions={{
          activeTintColor: '#FF1493',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70,},      
        }}
      >
       

       <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name={detailsName} component={DetailsScreen} options={{headerShown:false}}/>
        <Tab.Screen name={settingsName} component={SettingsScreen} options={{headerShown:false}} /> 

      </Tab.Navigator>
    </NavigationContainer>
   
  );
}



export default MainContainer;

