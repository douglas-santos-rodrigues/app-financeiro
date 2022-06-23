import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Hearder from "../../components/Hearder";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";

export default function Home() {
  return (
    <View style={styles.container}>
      <Hearder name="Douglas Santos" />
      <Balance  saldo="12.304,23" gasto="500,23"/>
      <Actions/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
