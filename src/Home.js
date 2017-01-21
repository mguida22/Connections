import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import Camera from 'react-native-camera';

class Home extends Component {
  render () {
    return (

      <View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          aspect={Camera.constants.Aspect.fit}>
        </Camera>
      </View>
    );
  }
}


export default Home;
