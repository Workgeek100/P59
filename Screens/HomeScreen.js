import * as React from 'react';
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from '../components/Appheader';
import db from '../config';

export default class Homescreen extends React.Component{
constructor(){
    super();
    this.state={
      like:0,
      dislike:0
    }
  }

  likeCount=()=>{ 
    this.setState({like:this.state.like+1})
  }
  dislikeCount=()=>{
    this.setState({dislike:this.state.dislike+1})
  }

  
likePressed(){
  var like=db.ref('Rating/'+'/')
  like.update({
    'likePressed':1
  })
}

dislikePressed(){
  var dislike = db.ref('Rating/'+'/')
  dislike.update({
    'dislikePressed':1
  })
}


  render(){
    return(
      <View>
      <TouchableOpacity 
      style={styles.jokebutton}
      onPress={()=>{
        this.props.navigation.navigate('Jokescreen')
      }}>
      <Text style={{fontSize:20}}>Read A Joke</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.horoscope}
      onPress={()=>{
        this.props.navigation.navigate('Horoscope')
      }}>
      <Text style={{fontSize:20}}>Horoscope</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.weather}
      onPress={()=>{
        this.props.navigation.navigate('Weather')
      }}>
      <Text style={{fontSize:20}}>Weather</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.topnews}
      onPress={()=>{
        this.props.navigation.navigate('Topnews')
      }}>
      <Text style={{fontSize:20}}>Top News</Text>
      </TouchableOpacity>
      <Text style={{ textAlign:'center',margin:5, fontSize:30, color:"blue"}}>Rate Us</Text>
      <TouchableOpacity
      onPress={()=>{
        this.likePressed();
        this.likeCount();
      }}>
      <Text style={{marginLeft:80, marginTop:-10}}>{this.state.like}</Text>
      <Image
      style={{width:50, height:50,marginLeft:70, marginTop:-5}}
      source={require('../assets/thumbsup.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>{
        this.dislikePressed();
        this.dislikeCount();
      }}>
      <Text style={{marginLeft:220, marginTop:-60}}>{this.state.dislike}</Text>
      <Image
      style={{width:50, height:50,marginLeft:200, marginTop:5}}
      source={require('../assets/thumbsdown.png')}
      />
      </TouchableOpacity>
      <AppHeader />
      </View>
    )
  }
}  

const styles = StyleSheet.create({
  jokebutton:{
    marginTop:90,
    marginLeft:70,
    backgroundColor:"yellow",
    borderWidth:5,
    borderRadius:100,
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },

  horoscope:{
    marginTop:20,
    marginLeft:70,
    backgroundColor:"green",
    borderRadius:100,
    borderWidth:5,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:50
  },

  weather:{
    marginTop:20,
    marginLeft:70,
    backgroundColor:"lightblue",
    borderRadius:100,
    borderWidth:5,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:50
  },


  topnews:{
    marginTop:20,
    marginLeft:70,
    backgroundColor:"purple",
    borderRadius:100,
    borderWidth:5,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:50
  }
});

