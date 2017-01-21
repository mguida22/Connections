
import React, { Component } from 'react';
 
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
} from 'react-native';
 
import QRCodeScanner from 'react-native-qrcode-scanner';
 
class QR extends Component {
  onSuccess(e) {
    Linking.openURL(e.data).catch(err => console.error('An error occured', err))
  }
 
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: QRCodeScanner,
          title: 'Scan Connections Code',
          passProps: {
            onRead: this.onSuccess.bind(this),
            topContent: <Text style={styles.centerText}>Scan to add social media</Text>,
            bottomContent: <TouchableOpacity style={styles.buttonTouchable}><Text style={styles.buttonText}>OK. Got it!</Text></TouchableOpacity>
          }
        }}
        style={{flex: 1}}
      />
    )
  }
}
 
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 3,
    padding: 32,
    width: 100,
    marginTop: 64,
    marginBottom: 64,
  },
 
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
 
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
 
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
 
  buttonTouchable: {
    padding: 16,
  },
});
 
export default QR;
