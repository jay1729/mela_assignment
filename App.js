/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

import Featured from './components/Featured';
import Brands from './components/Brands';
import Genders from './components/Genders';
import Types from './components/Types';
import Offers from './components/Offers';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={storeStyles.appName} >
          <Text style={storeStyles.title} >Sweatshirt Store</Text>
          </View>
          <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={storeStyles.scrollView}>
          <View style={storeStyles.body}>
          <Featured/>
          <Brands />
          <Genders />
          <Types />
          <Offers />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const storeStyles = StyleSheet.create({
  appName: {
    width: win.width,
    height: win.width*0.15,
    justifyContent: "center",
    backgroundColor: '#040e35'
  },
  body: {
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: '#ffffff',
    padding: 10,
    fontFamily: 'ProductSans-Medium',
    fontWeight: "bold"
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
