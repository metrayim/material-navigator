import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
 
// import bgImage from './img.png';
 
export default class Screen2 extends Component {
  static backgroundColor = '#FF9924';
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            blurRadius={0}
            source={{uri:'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'}}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>
            INVITE FRIENDS
          </Text>
          <Text style={styles.lilText}>
            Listen Your Favorite Music Together
          </Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    height: '27%',
    paddingLeft: 25,
    backgroundColor: 'transparent',
  },
  textTitle: {
    fontSize: 56,
    fontFamily: 'Bebas Neue',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
  },
  lilText: {
    fontSize: 13,
    // fontFamily: 'Montserrat',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
  },
});