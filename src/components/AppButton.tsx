import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({
  title,
  onPress,
}: AppButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});