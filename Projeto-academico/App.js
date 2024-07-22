import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import TopAppBar from './front/topAppBar';

export default function App() {
  const [TopAppBarTitle, setTopAppBarTitle] = useState("")

  // function changeAppTitle(title) {
  //   setTopAppBarTitle(title)
  // }

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
