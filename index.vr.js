import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

class Task extends Component {
      render(){
      return(
       <Text style={{textAlign:'center', fontSize: 0.2 }}> Todo: {this.props.text} </Text>

        )
    }
}

export default class ReactVR extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
         <View
           style= {{
           transform:[{translate:[0,0,-3]}],
           layoutOrigin:[0.5,0.5] 
         }}>

           <Task text='Get groceries'/>
           <Task text='Finish homework'/>
           <Task text='Do laundry'/>
         </View>
  
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVR', () => ReactVR);


