import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  Box
} from 'react-vr';



export default class ReactVR extends Component {
  

  constructor (){
    super();
    this.state = {

    fontSize:0.1
    }
  }
  render() {

    
    return (
      <View >
        <Pano source={asset('starry-sky.jpg')}/>
        <Text
        onEnter={()=> this.setState({fontSize:0.5})}
        onExit= {()=> this.setState({fontSize:0.1})}
      style ={{
      fontSize:this.state.fontSize,
      transform:[{translate:[0,0,-2]}]

      }}>
         HOVER OVER ME!!!
        </Text>
      </View>
    );
  }
};



AppRegistry.registerComponent('ReactVR', () => ReactVR);


