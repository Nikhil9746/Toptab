import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Searchbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";


import Video from "./src/Video";
import Chapter from "./src/Chapter";
import Resourses from "./src/Resourses";
import Qnblank from "./src/QNblank";

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

function Mystack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="Tab"
      component={MyTab}
      options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

function MyTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen
      name="Videos"
      component={Video}/>
      <Tab.Screen
      name="Chapter"
      component={Chapter}/>
      <Tab.Screen
      name="Resourse"
      component={Resourses}/>
      <Tab.Screen
      name="Qnblank"
      component={Qnblank}/>
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <SearchBar/>
      <Mystack/>
    </NavigationContainer>
  )
}