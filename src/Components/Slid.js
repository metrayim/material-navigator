import React, { Component } from 'react'
import { Text, View, Image, SafeAreaView ,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import { Pages } from 'react-native-pages';

export default class Slid extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.Container}>
                    <Pages>
                        <TouchableOpacity onPress={()=>(alert("metra"))} >
                            <Image style={styles.ImageSytle}  source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} >
                        <Image style={styles.ImageSytle} source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}  />
                        </View>
                        <View style={{ flex: 1}} >
                        <Image style={styles.ImageSytle} source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} />
                        </View>
                    </Pages>
                </View>

            </SafeAreaView>
        )
    }
}
const width=Dimensions.get("window").width;
const height=Dimensions.get('window').height;
const styles=StyleSheet.create({
    Container:{
        width:width,
        height:height*0.20,
        
        
        
    }
    ,
    ImageSytle:{
        height:height*0.20,
         width: 380,borderRadius:20,
         marginLeft:10,
         marginRight:10
    }
})
