import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated, SafeAreaView, StyleSheet } from 'react-native'

export default class animationspring extends Component {
    state = {
        x: 10,
        y: 400
    }
    constructor(props) {
        super(props)
    
        this.fadeAnimation = new Animated.Value(0)
        this.moveAnimation = new Animated.ValueXY({ x: 10, y: 400 })
      }
    // UNSAFE_componentWillMount() {
    //     this.moveAnimation = new Animated.ValueXY({ x: 10, y: 400 })
    //     this.fadeAnimation = new Animated.Value(0)
    // }
    _moveBall = () => {

        Animated.spring(this.moveAnimation, {
            toValue: { x: 250, y: 10 },
        }).start()
        // this.setState({x:this.state.x==10?250:this.state.x,y:this.state.y==400?10:this.state.y})
        // console.log("hii time")
    }
    componentDidMount() {
        Animated.timing(this.fadeAnimation, {
            toValue: 1,
            duration: 2000,
            // useNativeDriver: true,
        }).start()
        console.log("hiidkdk")
    }
    render() {
        console.log("x", this.state.x)
        console.log("y", this.state.y)

        return (
            <SafeAreaView style={{flex:1}}>
                {/* <View style={styles.container}>
                    <Animated.View style={[styles.tennisBall, this.moveAnimation.getLayout()]}>
                        <TouchableOpacity style={styles.button} onPress={this._moveBall}>
                            <Text style={styles.buttonText}>Press</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View> */}
                <View style={styles.containers}>
                    <Animated.Text style={[styles.text, { opacity: this.fadeAnimation }]}>
                        Hello, World!
        </Animated.Text>
                </View>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    tennisBall: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'greenyellow',
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    button: {
        paddingTop: 24,
        paddingBottom: 24,
    },
    buttonText: {
        fontSize: 24,
        color: '#333',
    }
    ,
    containers: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue',
        height:100,
      },
      text: {
        color: 'white',
        fontSize: 32,
      }
});
