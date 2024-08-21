import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TopAppBar from './front/topAppBar';
import { Emotion } from './front/api/Emotions';

export default function App() {
  const [TopAppBarTitle, setTopAppBarTitle] = useState("")

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopAppBar title={"Bem Vindo"}/>
      <Emotion/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 64,
    paddingHorizontal: 16,
  },
});