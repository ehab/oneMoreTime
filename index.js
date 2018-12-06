/** @format */

//1 import libraries
import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Header from './app/Header.js';


//2 build component
const toDoList = () => {
  return(
    <View>
      <Header></Header>
      <Text>To-do List </Text>
    </View>

  );
}

// rendering, registering

AppRegistry.registerComponent('oneMoreTime', ()=> toDoList);
