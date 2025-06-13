import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import LoginForm from "@/components/LoginForm";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <LoginForm />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
