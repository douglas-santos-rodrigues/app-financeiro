import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance({saldo,gasto}) {
  return (
    <View style={styles.container}>
      
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.correntSimbol}>R$</Text>
          <Text style={styles.balancePositive}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.correntSimbol}>R$</Text>
          <Text style={styles.balanceNegative}>{gasto}</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingStart:18,
    paddingEnd:18,
    marginTop:-24,
    marginStart:14,
    marginEnd:14,
    borderRadius:5,
    paddingTop:22,
    paddingBottom:22,
    zIndex:99
  },
  itemTitle:{
    fontSize:20,
    fontWeight:"bold"
  },
  content:{
    flexDirection:'row',
    alignItems:'center'
  },
  correntSimbol:{
    marginEnd:6
  },
  balancePositive:{
    color:'#2ecc71'
  },
  balanceNegative:{
    color:'#e74c3c'
  }
});
