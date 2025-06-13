import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useRouter } from "expo-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const isFormValid = email.trim() !== "" && password.trim() !== "";
  const router = useRouter();

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/about");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push("/about");
      }
    } catch {
      setError("Fel användarnamn eller lösenord");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Logga in" : "Skapa konto"}</Text>

      <Text style={styles.label}>E-post</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        // React Native's TextInput använder onChangeText som direkt skickar in sträng-värdet från inputen
        // till skillnad från web React där du behöver extrahera strängen via event.target.value.
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Lösenord</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {!isLogin && (
        <>
          <Text style={styles.label}>Bekräfta lösenord</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </>
      )}

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>
          {isLogin ? "Logga in" : "Registrera"}
        </Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleTextWhite}>
          {isLogin ? "Har du inget konto?" : "Har du redan ett konto?"}
        </Text>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? "Registrera dig här" : "Logga in här"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  toggleText: {
    color: "#007AFF",
    paddingLeft: 5,
  },
  error: {
    marginTop: 10,
    color: "red",
  },
  toggleTextWhite: {
    color: "white",
  },
  disabledButton: {
    backgroundColor: "gray",
    color: "white",
  },
});
