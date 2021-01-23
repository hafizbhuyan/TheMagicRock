import React, { Component, useState } from 'react';
import NavigationContainer from './app/routes/Drawer';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

export default class App extends Component {
  state = {
    isReady: false
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <NavigationContainer />
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./app/assets/MovieBg.jpg'),
      require('./app/assets/MusicBg.jpg'),
      require('./app/assets/RestaurantBg.jpg'),
      require('./app/assets/TVShowBg.jpg'),
      require('./app/assets/VacationBg.jpg')
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}