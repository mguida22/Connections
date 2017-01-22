import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Navigator
} from 'react-native';

import { Text } from 'react-native-elements';

import AuthWebView from './AuthWebView';
import ConnectionsRegister from './ConnectionsRegister';
import secrets from './secrets';

class Profile extends Component {
  renderScene(route, navigator) {
    switch(route.name) {
      case 'ConnectionsRegister':
        return <ConnectionsRegister navigator={navigator} {...route.passProps} />
        break;
      case 'AuthWebView':
        return <AuthWebView navigator={navigator} {...route.passProps} />
        break;
      default:
        console.error('unkown route');
    }
  }

  render() {
    return (
     <View style={styles.view}>
      <Text style={styles.logo}>
          Connections
        </Text>
        <Text style={styles.welcome}>
          Connect with anyone on all social media platforms within seconds
        </Text>
        <Navigator
          style={{ flex: 1 }}
          initialRoute={{ name: 'ConnectionsRegister' }}
          renderScene={ this.renderScene } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  logo: {
    marginTop: 50,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Avenir Next',

  },
  welcome: {
    fontSize: 25,
    textAlign: 'left',
    marginTop: 40,
    marginBottom: 55,
    marginLeft: 20,
    marginRight: 20,
    color: '#d13a8f',
    fontFamily: 'Avenir Next',

  }
});

export default Profile;
