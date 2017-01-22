import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

import secrets from './secrets';

class ConnectionsRegister extends Component {
  constructor() {
    super();

    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!!!')
    console.log(this.state)

    this._getInstagramId = this._getInstagramId.bind(this);
    this._getLinkedInId = this._getLinkedInId.bind(this);
    this._getUserId = this._getUserId.bind(this);
  }
  // TODO: DRY this all up....
  _getInstagramId() {
    const access_code = this.state.social.instagram.access_code;
    return fetch('https://api.instagram.com/v1/users/self/?access_token='+access_code)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          social: {
            linkedin: {
              userID: responseJson.data.id
            }
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getLinkedInId() {
    const access_code = this.state.social.linkedin.access_code;
    return fetch('https://api.linkedin.com/v1/people/~?format=json&oauth2_access_token='+access_code)
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson.id);
        this.setState({
          social: {
            linkedin: {
              userID: responseJson.id
            }
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getUserId(service) {
    switch(service) {
      case 'instagram':
        return this._getInstagramId();
        break;
      case 'linkedin':
        return this._getLinkedInId();
        break;
      default:
        console.error('unsupported service');
    }
  }

  // TODO: make this less of a hack.... there's gotta be a better way.
  componentDidUpdate(prevProps, prevState) {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(this.state);
    if (!this.state) { return; }

    if (prevState.social !== this.state.social) {
      this.state.social.forEach(service => {
        // if we have a new service, get the ID for it
        if (!prevState.social[service] || prevState.social[service] !== this.state.social[service]) {
          this._getUserId(service);
        }
      });
    }
  }

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
