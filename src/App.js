import React, { Component } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Tabs, Tab } from 'react-native-elements';

import colors from './config/colors';

import Home from './Home';
import Profile from './Profile';
import QR from './QR';

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
          selected={selectedTab === 'home'}
          renderIcon={() => <Icon color={colors.grey2} name='whatshot' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='whatshot' size={26} />}
          onPress={() => this.changeTab('home')}>
          <Home />
        </Tab>
        <Tab
          selected={selectedTab === 'profile'}
          renderIcon={() => <Icon color={colors.grey2} name='settings' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='settings' size={26} />}
          onPress={() => this.changeTab('profile')}>
          <Profile />
        </Tab>
        <Tab
          selected={selectedTab === 'qr'}
          renderIcon={() => <Icon color={colors.grey2} name='code' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='code' size={26} />}
          onPress={() => this.changeTab('qr')}>
          <QR />
        </Tab>
      </Tabs>
    );
  }
}

export default Connections;
