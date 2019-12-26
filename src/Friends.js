import React, { Component } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'

export default class Friends extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Add friends here!
                <Button
                        title="Back to home"
                        onPress={() =>
                            this.props.navigation.navigate('Home')
                        }
                    />
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
