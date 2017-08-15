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

class Row extends Component {

    render () {
     return (
     
    <View style = {[{ backgroundColor:this.props.color}, styles.row]} >
    
     </View>
      )
    }
}

export default class ReactVR extends Component {
  
  render() {

    
    return (
      <View style= {styles.container}>
        <Pano source={asset('starry-sky.jpg')}/>
        <Box 
    dimwidth={0.5}
    dimHeight={0.5}
    dimDepth= {0.5}
    wireFrame={true}
    style={{
    color:'red',
    transform:[
    {translate:[0,0,-3]},
    {translateY:1},
    {translateX:-0.5},
    {rotateY:45},
    {rotateZ:45}

    ]


    }}
    />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text:{
    fontSize: 0.2,
    textAlign:'center'

  },
  row:{
   width :0.5,
   height:0.3,
   margin:0.1
  },
  container :{

    flex:1,
    width:2,
    flexDirection:"row",
    transform:[{translate:[-1,0,-3]}]
  }

})

AppRegistry.registerComponent('ReactVR', () => ReactVR);


