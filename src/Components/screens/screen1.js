import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
 
// import bgImage from './img.png';
 
 class Screen1 extends Component {
  static backgroundColor = '#ff3631';
 
  render() {
      console.log("metera",this.props)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image longPress={()=>alert("hello") }
            blurRadius={0}
            source={{uri:'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'}}
            style={styles.image}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>
            INVITE FRIENDS
          </Text>
          <Text style={styles.lilText}>
            Listen Your Favorite Music Together
          </Text>
        </View>
        <View style={styles.viewButton}>
        {/* <TouchableOpacity style={styles.nextButtonContainer}>
                <Text style={styles.lilText1}>
                    Skip
                </Text>
            </TouchableOpacity> */}
            <Button title="dkdk" longPress={()=>{alert('heleloo')}}/>
            <TouchableOpacity style={styles.nextButtonContainer} onPress={()=>{console.log("dkdkdkdk")}}>
                <Text style={styles.lilText1}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default withNavigation(Screen1);
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
  nextButtonContainer: {
    height: '27%',
    backgroundColor: 'transparent',
    
    
  },
  lilText1: {
    fontSize: 30,
    // fontFamily: 'Montserrat',
    fontFamily: 'Bebas Neue',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
    borderRadius:20,
    borderWidth: 3,
    borderColor:'#F2F2F0',
    height:60,
    width:300,
    textAlign:'center',
    padding:6,
    margin:4,
  }
  ,
  viewButton:{
      flexDirection:'row',
      justifyContent:'center',
      marginBottom:50,
     

  }
});