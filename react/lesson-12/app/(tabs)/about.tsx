import { StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export default function About() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}>About</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
