import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';



export default class ReactVR extends Component {
  
  constructor() {
   super();

   this.state = {

     showSign:true
   };

   setInterval (() => this.setState ({showSign: !this.state.showSign}), 1000);

  }


  render() {

    let message = this.state.showSign === true ? "Welcome to the VR land" : " "
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
         <Text style = {{fontSize: 0.2 , transform:[{translate:[-1,0,-2]}]}}> {message}
          
         </Text>
  
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVR', () => ReactVR);
