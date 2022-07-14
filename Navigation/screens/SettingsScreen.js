import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Slider,
} from 'react-native';
// import Video from 'react-native-video';
import {Shadow, NeuMorph} from 'react-native-neomorph-shadows';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({navigation}) {
  const NeuMorph = ({children, size, style}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}>
            {children}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf: 'stretch'}}>
        <View style={{marginHorizontal: 32, marginTop: 32}}>
          <View style={styles.topContainer}>
            <NeuMorph size={48}>
              <Ionicons
                name="arrow-back-outline"
                onPress={() => navigation.navigate('List')}
                size={20}
              />
            </NeuMorph>
            <View>
              <Text style={styles.playing}>PLAYING NOW</Text>
            </View>
            <NeuMorph size={48}>
              <Ionicons name="menu-outline" size={20} />
            </NeuMorph>
          </View>

          <View style={styles.songArtContainer}>
            <NeuMorph size={300}>
              <Image
                source={require('../assets/pinkey.png')}
                style={styles.songArt}
              />
            </NeuMorph>
          </View>
          <View style={styles.songContainer}>
            <Text style={styles.title}> Lost It </Text>
            <Text style={styles.artist}> Flume ft.vic mensa</Text>
          </View>
          <View style={styles.trackContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.time}>1.21</Text>
              <Text style={styles.time}>3.45</Text>
            </View>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#8AAAFF"
            maximumTrackTintColor="#DAE6F4"
            thumbTintColor="#7B9BFF"
            marginTop={-29}
          />
          <View style={styles.controlsContainer}>
            <NeuMorph
              size={50}
              style={{backgroundColor: '#8AAAFF', borderColor: '#8AAAFF'}}>
              <Ionicons name="play-back-outline" size={24} color={'#FFFFFF'} />
            </NeuMorph>
            <NeuMorph
              size={50}
              style={{backgroundColor: '#8AAAFF', borderColor: '#8AAAFF'}}>
              <Ionicons name="ios-pause" size={24} color={'#FFFFFF'} />
            </NeuMorph>
            <NeuMorph
              size={50}
              style={{backgroundColor: '#8AAAFF', borderColor: '#8AAAFF'}}>
              <Ionicons
                name="play-forward-outline"
                size={24}
                color={'#FFFFFF'}
              />
            </NeuMorph>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 2,
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 0,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD',
  },
  playing: {
    color: 'grey',
    fontWeight: '800',
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: 'center',
  },
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: '#D7E1F3',
    borderWidth: 10,
  },
  songContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#6C7A93',
    fontWeight: '600',
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: 'grey',
    fontWeight: '500',
  },
  trackContainer: {
    marginTop: 12,
    marginBottom: 64,
  },
  time: {
    fontSize: 15,
    color: 'grey',
    fontWeight: '700',
  },
  controlsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
