import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image
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
    return (
      <View style={styles.container}>
        <Image
          style={styles.qr}
          source={{uri: this.state.qrPhoto}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qr: {
    height: 300,
    width: 300
  }
});

export default DisplayQR;
