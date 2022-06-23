import React from "react";
import { View, Text, StyleSheet, StatusBar ,TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons';

const statusBarHeigth = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;
export default function Hearder() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>Douglas Santos</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    flexDirection:'row',
    paddingTop: statusBarHeigth,
    paddingStart:16,
    paddingEnd:16,
    paddingBottom:44
  },
});
