import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors"; 
import CustomButton from "../components/CustomButton"; // 

export default function Index() {
 
  const currentColors = Colors.dark; 

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]} >
      <View style={{ alignItems: "center", gap: 50 }}>
        <View>
          <Image source={require("../assets/images/logo1.png")}  style={{ width: 300, height: 300 }}/>
        </View>
        <Text style={[styles.text, { color: currentColors.text }]}>Bienvenido al Curso de React Native</Text>
        <CustomButton
          title="Ver Productos"
          onPress={() => {
            console.log("Botón de Éxito presionado");
          }}
          type="warning"
          outline
          margin={10}
        />
      </View>
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
    textAlign: "center",
    margin: 30
  }
});