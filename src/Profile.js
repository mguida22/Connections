import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput, 
  View,
  Linking,
  Alert
} from 'react-native';

import { Text, SocialIcon } from 'react-native-elements';

import secrets from './secrets';


class ConnectionsRegister extends Component {
  handleUrl(event) {
    console.log("---------------" + event.url);
  }

  onButtonPress(service) {
    Linking.addEventListener('url', this.handleUrl);

    switch(service) {
      case 'instagram':
        Linking.openURL("https://api.instagram.com/oauth/authorize/?response_type=code&redirect_uri=https://connections.shamdasani.org&client_id="+secrets.instagram.client_id);
        break;
      case 'facebook':
        break;
      case 'twitter':
        break;
      case 'linkedin':
        Linking.openURL("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+secrets["linkedin-web"].client_id+"&redirect_uri=https://connections.shamdasani.org&state="+secrets.state);
        break;
      default:
        console.error('unknown service');
    }
  }


  render() {
    return (
     <View style={styles.register}>        
       <SocialIcon style={styles.social}
        title='Sign in with Twitter'
        button
        type='twitter'
        onPress={this.onButtonPress.bind(this, 'twitter')}
      />

      <SocialIcon style={styles.social}
        title='Sign In With Facebook'
        button
        type='facebook'
        onPress={this.onButtonPress.bind(this, 'facebook')}
      />

      <SocialIcon style={styles.social}
        title='Sign In With Instagram'
        button
        light
        type='instagram'
        onPress={this.onButtonPress.bind(this, 'instagram')}
      />

      <SocialIcon style={styles.social}
        title='Sign In With LinkedIn'
        button
        dark
        type='linkedin'
        onPress={this.onButtonPress}
      />
    </View>
    );
  }
}


// simpleAuthClient.authorize('twitter').then((info) => {
//   let token = info.token;
//   let name = info.name;
// }).catch((error) => {
//   let errorCode = error.code;
//   let errorDescription = error.description;
// });



// Intro component
class Profile extends Component {
  render() {
    return (
     <View style={styles.view}>
      <Text style={styles.logo}>
          Connections 
        </Text>
        <Text style={styles.welcome}>
          Connect with anyone on all social media platforms within seconds
        </Text>
         <ConnectionsRegister />

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

  },
  social: {
    marginRight:40,
    marginLeft:40,
  }
});

export default Profile;
