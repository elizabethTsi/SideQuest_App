// app/index.tsx

import { View, Text } from "react-native";
import AppButton from "../components/AppButton";

export default function HomeScreen() {
  return (
    <View style={{ padding: 24, gap: 16 }}>
      <Text>Welcome to my app!</Text>

      <AppButton
        title="Get Started"
        onPress={() => console.log("Started")}
      />
    </View>
  );
}