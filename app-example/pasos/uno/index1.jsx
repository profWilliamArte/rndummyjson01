import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>Bienvenido al Curso de React Native</Text>
    </View>
  );
}
