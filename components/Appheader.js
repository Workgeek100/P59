import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.header}>
      <Text style={styles.headerText}>NEWS LETTER</Text>
      </View>
    )
  }
}


const styles=StyleSheet.create({
  header:{
    marginTop:-470,
    backgroundColor:"blue",
    width:324,
    height:80,
    alignItems:'center',
    justifyContent:'center'
  },
  headerText:{
    fontSize:40
  }
})