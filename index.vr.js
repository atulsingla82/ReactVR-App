import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class ReactVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
        
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVR', () => ReactVR);


