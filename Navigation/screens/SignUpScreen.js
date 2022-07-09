import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
// import Video from 'react-native-video';

export default function SignUpScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}