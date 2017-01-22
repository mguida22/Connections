import React, { Component } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tabs, Tab } from 'react-native-elements';

import colors from './config/colors';

import Home from './Home';
import Profile from './Profile';
import DisplayQR from './DisplayQR';

class Connections extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'profile'
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(selectedTab) {
    this.setState({
      selectedTab
    });
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <Tabs hidesTabTouch>
        <Tab
          selected={selectedTab === 'display'}
          renderIcon={() => <Icon color={colors.grey2} name='qrcode-scan' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='qrcode-scan' size={26} />}
          onPress={() => this.changeTab('display')}>
          <DisplayQR />
        </Tab>
        <Tab
          selected={selectedTab === 'home'}
          renderIcon={() => <Icon color={colors.grey2} name='camera' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='camera' size={26} />}
          onPress={() => this.changeTab('home')}>
          <Home />
        </Tab>
        <Tab
          selected={selectedTab === 'profile'}
          renderIcon={() => <Icon color={colors.grey2} name='account-settings-variant' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='account-settings-variant' size={26} />}
          onPress={() => this.changeTab('profile')}>
          <Profile />
        </Tab>
      </Tabs>
    );
  }
}

export default Connections;
