import React, { Component } from 'react';
import {
  WebView
} from 'react-native';

import secrets from './secrets';

class AuthWebView extends Component {
  _onNavigationStateChange = (event) => {
    if (event.url.slice(0, secrets.redirect_uri.length) === secrets.redirect_uri) {
      console.log(event.url);
      const route = event.url.split('?')[1].split('&');

      let queryParams = {};
      route.forEach(param => {
        let s = param.split('=');
        queryParams[s[0]] = s[1];
      });

      console.log(queryParams.code);

      this.props.navigator.pop()
    }
  }

  _getURI(service) {
    switch(service) {
      case 'facebook':
        break;
      case 'linkedin':
        return "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+secrets["linkedin-web"].client_id+"&redirect_uri="+secrets.redirect_uri+"&state="+secrets.state;
        break;
      case 'twitter':
        break;
      case 'instagram':
        return "https://api.instagram.com/oauth/authorize/?response_type=code&redirect_uri="+secrets.redirect_uri+"&client_id="+secrets.instagram.client_id;
        break;
      default:
        console.error('unknown service');
    }
  }

  render() {
    return (
      <WebView
        onNavigationStateChange={this._onNavigationStateChange}
        source={{uri: this._getURI(this.props.service)}}
        style={{marginTop: 20}}
      />
    )
  }
}

export default AuthWebView;
