import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Locations from './components/location';

export default function App() {
  return (
    <ScrollView>
      <Header
        leftComponent= {{icon: 'menu', color: '#FCF7F8'}}
        centerComponent = {{text: 'Covid-19 Tracker', style: { color: '#FCF7F8' }}}
        containerStyle= {{backgroundColor: '#275DAD'}}
      />
      <Locations />
    </ScrollView>
  );
}

