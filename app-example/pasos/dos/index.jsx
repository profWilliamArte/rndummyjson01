import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors"; 

export default function Index() {
 
  const currentColors = Colors.dark; 

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]} >
      <Text style={[styles.text, { color: currentColors.text }]}>Bienvenido al Curso de React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});