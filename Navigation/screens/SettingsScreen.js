import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
// import Video from 'react-native-video';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}
// <View style={styles.container}>
//       <Video source={{uri: "https://www.youtube.com/watch?v=5jQSat1cKMo"}}   // Can be a URL or a localfile.
//        ref={(ref) => {
//          this.player = ref
//        }}                                      // Store reference
//        onBuffer={this.onBuffer}                // Callback when remote video is buffering
//        onEnd={this.onEnd}                      // Callback when playback finishes
//        onError={this.videoError}               // Callback when video cannot be loaded
//        style={styles.backgroundVideo} />
// </View>
// );
// }
// const styles = StyleSheet.create({
//   container:{ flex: 1, justifyContent: "center"},
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
