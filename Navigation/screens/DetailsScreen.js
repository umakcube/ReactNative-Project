import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default function DetailsScreen({navigation}) {
  return (
    <View elevation={5} style={styles.border}>
      <Text style={styles.text}>Hi, Krithika Raa</Text>
      <View style={styles.card}>
        <ImageBackground
          source={require('../assets/ncashcard.png')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text1}>₹ 25,511.00</Text>
        </ImageBackground>
      </View>
      {/* <Image style={styles.card} source={require('../assets/ncashcard.png')} /> */}
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#e5e4e2',
            width: 180,
            height: 205,
            borderRadius: 9,
          }}>
          <Text
            style={{
              top: 20,
              left: 10,
              color: '#4682B4',
              fontSize: 20,
              fontWeight: 'normal',
            }}>
            FBA Wallet{' '}
          </Text>
          <Image
            style={{top: 30, left: 50}}
            source={require('../assets/burger.png')}
          />
          <Text
            style={{
              top: 40,
              left: 50,
              color: '#4682B4',
              fontSize: 17,
              fontWeight: 'normal',
            }}>
            Balance{' '}
          </Text>
          <Text
            style={{
              top: 40,
              left: 25,
              color: '#4682B4',
              fontSize: 23,
              fontWeight: 'normal',
            }}>
            ₹ 25,417.00{' '}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#e5e4e2',
            width: 180,
            height: 205,
            borderRadius: 9,
            right: 15,
          }}>
          <Text
            style={{
              top: 20,
              left: 10,
              color: '#4682B4',
              fontSize: 20,
              fontWeight: 'normal',
            }}>
            Expense Wallet{' '}
          </Text>
          <Image
            style={{top: 30, left: 60}}
            source={require('../assets/plane.png')}
          />
          <Text
            style={{
              top: 40,
              left: 50,
              color: '#4682B4',
              fontSize: 17,
              fontWeight: 'normal',
            }}>
            Balance{' '}
          </Text>
          <Text
            style={{
              top: 40,
              left: 45,
              color: '#4682B4',
              fontSize: 23,
              fontWeight: 'normal',
            }}>
            ₹ 94.00{' '}
          </Text>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View
          style={{
            backgroundColor: '#e5e4e2',
            width: 180,
            height: 205,
            borderRadius: 9,
          }}>
          <Text
            style={{
              top: 20,
              left: 10,
              color: '#4682B4',
              fontSize: 20,
              fontWeight: 'normal',
            }}>
            Claims{' '}
          </Text>
          <Image
            style={{top: 30, left: 50}}
            source={require('../assets/wallet.png')}
          />
          <Text
            style={{
              top: 40,
              left: 40,
              color: '#4682B4',
              fontSize: 17,
              fontWeight: 'normal',
            }}>
            Applied claim{' '}
          </Text>
          <Text
            style={{
              top: 40,
              left: 30,
              color: '#4682B4',
              fontSize: 23,
              fontWeight: 'normal',
            }}>
            ₹ 77,349.00{' '}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#e5e4e2',
            width: 180,
            height: 205,
            borderRadius: 9,
            right: 15,
          }}>
          <Text
            style={{
              top: 20,
              left: 10,
              color: '#4682B4',
              fontSize: 20,
              fontWeight: 'normal',
            }}>
            De'tax Score{' '}
          </Text>
          <Image
            style={{top: 30, left: 60}}
            source={require('../assets/hand.png')}
          />
          <Text
            style={{
              top: 35,
              left: 40,
              color: '#4682B4',
              fontSize: 17,
              fontWeight: 'normal',
            }}>
            Savings score{' '}
          </Text>
          <Text
            style={{
              top: 35,
              left: 60,
              color: '#4682B4',
              fontSize: 23,
              fontWeight: 'normal',
            }}>
            6/10{' '}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    top: 1,
    height: 695,
    borderColor: '#e5e4e2',
    borderWidth: 3,
    borderRadius: 9,
    // fontFamily: "SFUIDisplay-Semibold",

    shadowColor: '#e5e4e2',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 7,
      width: 6,
    },
  },
  text: {
    fontSize: 20,
    left: 8,
    fontWeight: '500',
    top: 5,
    opacity: 2,
  },
  card: {
    top: 20,
    left: 7,
    right: 5,
    width: 370,
    height: 180,
    borderRadius: 9,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 120,
    marginLeft: 30,
  },
  container: {
    top: 40,
    left: 9,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subcontainer: {
    top: 15,
    left: 9,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
