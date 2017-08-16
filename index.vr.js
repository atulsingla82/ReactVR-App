import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet
} from 'react-vr';


export default class ReactVR extends Component {

  constructor(){

    super();

    this.state = {
      showMenu :false

    }
  }

  toggleMenu(){

    this.setState({showMenu: !this.state.showMenu})
  }
  
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
         <View style= {styles.menuButton}
         onEnter= {() => this.toggleMenu ()}>
        <Text style={styles.menuButtonText}> 
        {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
        </Text>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create ({
      menuButton: {
      backgroundColor:'#fff',
      borderRadius:0.25,
       width:0.8,
      height:0.5,
      alignItems:'center',

      justifyContent:'center',
      borderWidth:0.01,
      transform:[
      {translate:[ -2, 0, -5]}
      ]
      },
      menuButtonText:{
      textAlign:'center',
      fontSize:0.20,
      color:'#000'
      }


})

AppRegistry.registerComponent('ReactVR', () => ReactVR);


