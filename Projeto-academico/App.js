import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import TopAppBar from './front/topAppBar';

export default function App() {
  const [TopAppBarTitle, setTopAppBarTitle] = useState("")

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopAppBar title={"Bem Vindo"}/>
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