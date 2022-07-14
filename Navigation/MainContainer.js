import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpScreen from './screens/SignUpScreen';

function MyTabBar({state, descriptors, navigation}) {
  const color = 'red';
  const [translateX] = useState(new Animated.Value(0));
  const translateTab = index => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.slidingTabContainer}>
        <Animated.View
          style={[styles.slidingTab, {transform: [{translateX}]}]}
        />
      </View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tabBarIcon = options.tabBarIcon;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            {/* <Ionicons name={isFocused ? tabBarIcon.activeIcon : tabBarIcon.inActiveIcon} 
            type={tabBarIcon.type} size={24} color={color} />
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
            <TabIcon
              tabIcon={tabBarIcon}
              isFocused={isFocused}
              label={label}
              index={state.index}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabIcon = ({isFocused, tabIcon, label, index}) => {
  const [translateY] = useState(new Animated.Value(0));
  const translateIcon = index => {
    Animated.spring(translateY, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    // translateTab(state.index)
    if (isFocused) {
      translateIcon(-0.1); //move up
    } else {
      translateIcon(0); //centered
    }
  }, [index]);
  const color = 'red';
  return (
    <>
      <Animated.View style={{transform: [{translateY}]}}>
        <Ionicons
          name={isFocused ? tabIcon.activeIcon : tabIcon.inActiveIcon}
          type={tabIcon.type}
          size={24}
          color={isFocused ? 'white' : 'grey'}
        />
      </Animated.View>
      <Text style={{color: isFocused ? '#4682B4' : '#222'}}>{label}</Text>
    </>
  );
};

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: HomeScreen,
  },
  {
    route: 'List',
    label: 'List',
    type: Ionicons,
    activeIcon: 'list',
    inActiveIcon: 'list-outline',
    component: DetailsScreen,
  },
  {
    route: 'Person',
    label: 'Person',
    type: Ionicons,
    activeIcon: 'person',
    inActiveIcon: 'person-outline',
    component: SettingsScreen,
  },
];

const {width} = Dimensions.get('window');
const MARGIN = 6;
const TAB_BAR_WIDTH = width - 2 * MARGIN;
const TAB_WIDTH = TAB_BAR_WIDTH / TabArr.length;

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <MyTabBar {...props} />}>
        {TabArr.map((_, index) => {
          return (
            <Tab.Screen
              key={index}
              name={_.route}
              component={_.component}
              options={{
                tabBarColor: _.tabBarColor,
                tabColor: _.tabBarColor,
                tabBarIcon: {
                  activeIcon: _.activeIcon,
                  inActiveIcon: _.inActiveIcon,
                  type: _.type,
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    width: TAB_BAR_WIDTH,
    height: 50,
    position: 'absolute',
    alignSelf: 'center',
    bottom: MARGIN,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  slidingTabContainer: {
    width: TAB_WIDTH,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  slidingTab: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#4682B4',
    bottom: 25,
    borderWidth: 4,
    borderColor: 'white',
  },
});
