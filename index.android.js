import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App';

AppRegistry.registerComponent('ReactNativeSample', () => App);

if (module.hot) {
    module.hot.accept();
}
