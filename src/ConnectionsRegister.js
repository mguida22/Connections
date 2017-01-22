import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

import secrets from './secrets';

class ConnectionsRegister extends Component {
  _navigate(name) {
    this.props.navigator.push({
      name: 'AuthWebView',
      passProps: {
        service: name
      }
    });
  }

  render() {
    return (
      <View style={styles.register}>
        <SocialIcon style={styles.social}
          title='Sign in with Twitter'
          button
          type='twitter'
          onPress={this._navigate.bind(this, 'twitter')}
        />

        <SocialIcon style={styles.social}
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={this._navigate.bind(this, 'facebook')}
        />

        <SocialIcon style={styles.social}
          title='Sign In With Instagram'
          button
          light
          type='instagram'
          onPress={this._navigate.bind(this, 'instagram')}
        />

        <SocialIcon style={styles.social}
          title='Sign In With LinkedIn'
          button
          dark
          type='linkedin'
          onPress={this._navigate.bind(this, 'linkedin')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  social: {
    marginRight:40,
    marginLeft:40,
  }
});

export default ConnectionsRegister;
