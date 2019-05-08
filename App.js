/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Video from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {
  onBuffer() {
    console.log('on buffer');
  }

  onError() {
    console.log('on error');
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require('./data/cruz.mp3')}   // Can be a URL or a local file.
          ref={(ref) => {this.player = ref}}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.onError}               // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          controls={true}
          audioOnly={true}
          playWhenInactive={true}
          playInBackground={true}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
