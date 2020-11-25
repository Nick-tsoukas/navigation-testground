
import React from 'react';
import {View , StyleSheet} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Navigation from './config/navigation';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigation />
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
