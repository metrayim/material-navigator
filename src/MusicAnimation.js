import React, { Component } from 'react'
import { Text, View,ScrollView,Animated,Image,Slider,Dimensions } from 'react-native'
const SCREEN_HEIGHT=Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;
export default class MusicAnimation extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
