//1 import libraries
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

//2 build/render component
class Header extends Component {
  render(){
    return(
      <View style = {headerStyle.header}>
        <Text style ={headerStyle.txt1}>Al Salamo Alaikom </Text>
      </View>
    )
  }
}


const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: 'yellow',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt1: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
// export component to available for other components
export default Header;
