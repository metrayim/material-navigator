import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
 
// import bgImage from './img.png';
 
export default class Screen3 extends Component {
  static backgroundColor = '#FFEB41';
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            blurRadius={0}
            source={{uri:'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg?itok=4t_1_fSJ'}}
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