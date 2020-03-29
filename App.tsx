import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <ScrollView>
      <Header
        leftComponent= {{icon: 'menu', color: '#FCF7F8'}}
        centerComponent = {{text: 'Covid-19 Tracker', style: { color: '#FCF7F8' }}}
        containerStyle= {{backgroundColor: '#275DAD'}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flex: 1,
    backgroundColor: '#275DAD',
    color: '#FCF7F8',
    fontSize: 'large',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem' 
  },
});
