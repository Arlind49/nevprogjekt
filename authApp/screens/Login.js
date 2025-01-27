import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native-web";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        credentials: "omit",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View>
      <Text >Welcome to Fake API Call</Text>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
