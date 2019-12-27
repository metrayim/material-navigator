import React, { Component } from 'react'
import { Text, View,ScrollView,Animated,Image,Slider,Dimensions,SafeAreaView } from 'react-native'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';

const SCREEN_HEIGHT=Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;
const Home =()=>{
    return(
        <SafeAreaView>
            <View><Text>Hello Home</Text></View>
        </SafeAreaView>
        
    )
}
const Other =()=>{
    return(
        <SafeAreaView>
        <View><Text>Hello Home</Text></View>
    </SafeAreaView>
    )
}
const MySwitch = createAnimatedSwitchNavigator(
    {
      Home: Home,
      Other: Other,
    },
    {
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    }
  );
const AppContainer=createAppContainer(MySwitch)
class MusicAnimation extends Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}
export default MusicAnimation;
