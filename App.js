import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SafeAreaView from 'react-native-safe-area-view';
import { Avatar,Iconz } from 'react-native-elements';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TabBar from './src/tabBar'
import Ionicons from 'react-native-vector-icons/FontAwesome';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Avatar rounded icon={{ name: 'home' }} />

        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const Saved=()=>{
  return(
    <View><Text>Hreloo</Text></View>
  )
}
const Time=()=>{
  return(
    <View><Text>Hreloo</Text></View>
  )
}
const HomeStack = createStackNavigator({
  home: HomeScreen
})
const DetailsStack = createStackNavigator({
  brand: DetailsScreen
})
const SavedStack = createStackNavigator({
  bag: Saved
})
const TimeStack = createStackNavigator({
  wishlist: Time
})

const RootStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Details: DetailsStack,
    Saved:SavedStack,
    Time:TimeStack
  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Details') {
          iconName = `star`;
        } else if (routeName === 'Saved') {
          iconName = `shopping-bag`;
        } else if (routeName === 'Time') {
          iconName = `heart`;
        } else if (routeName === 'Profile') {
          iconName = `user`;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarComponent: (props) => <TabBar {...props}/>,
    tabBarOptions: {
        tabFeatured: 'Bag',
        backgroundFeaturedIcon: '#D7465A',
        activeFeaturedTintColor: 'skyblue',
        inactiveFeatureTintColor: 'white',
        showLabel: true,
        activeTintColor: '#D7465A',
        inactiveTintColor: '#E1E3DB',
        style: {
            height: 80,
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#F2F3EF'
        },
        tabStyle: {}
    }
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (<SafeAreaView style={{flex:1}}><AppContainer /></SafeAreaView>);
  }
}
