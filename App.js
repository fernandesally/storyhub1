import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from "react-navigation";
import {BottomTabNavigator} from "react-navigation-tabs" ;
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
export default class App extends React.Component {
  render(){
  return (
    <View style={{flex:1}}>
<Appcontainer/>
    </View>
  ); 
  }
}   
const bottomtab = createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen},
   ReadStoryScreen:{screen:ReadStoryScreen}
 })
 
 const Appcontainer=createAppContainer(bottomtab)
      
    