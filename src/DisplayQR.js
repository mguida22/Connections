import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements'

import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';

class DisplayQR extends Component {
  constructor() {
    super();

    this.state = {
      qrPhoto: '',
      loading: true
    };

    this.fetchQRCode();
  }

  fetchQRCode() {
    return fetch('https://connections.mguida.com/qr', {
        method: 'POST',
        headers: {
          'Accept': 'text/html',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          social: {
            tw: 'twitter_value',
            ig: 'instagram_value',
            in: 'linkedIn_value'
          }
        })
      }
    )
    .then(response => response.text())
    .then((response) => {
      console.log(response)
      this.setState({
        qrPhoto: `data:image/png;base64,${response}`
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let _scrollView: ScrollView;

    let icons = ['twitter', 'instagram', 'facebook','linkedin'];
    let createIconRow = (item, i) => <SocialIcon key={i} type={item} />;
    return (
      <View style={styles.container}>
        <Image
          style={styles.qr}
          source={{uri: this.state.qrPhoto}}
        />
        <Text >  </Text>
        <Text >  </Text>
        <Text > One </Text>
        <Text >  </Text>
        <Text >  </Text>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}>
          {icons.map(createIconRow)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: 300,
  },
  horizontalScrollView: {
    height: 100,
  },
  text: {
    fontSize: 500,
    color: '#888888',
    left: 200,
    top: 200,
    height: 40,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qr: {
    height: 400,
    width: 400
  }
});

export default DisplayQR;
