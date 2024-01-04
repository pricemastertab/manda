// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usenavigation = useNavigation(); 

  const handleLogin = () => {
    // Lógica de login aqui
    // Você pode chamar uma API para autenticar o usuário

    // Após o login, você pode navegar para a próxima tela (por exemplo, a tela principal do aplicativo)
    // Neste exemplo, vou navegar para uma tela fictícia chamada 'Home'
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.signUpText} onPress={() => navigation.navigate('Register')}>
        Ainda não tem uma conta? Registre-se aqui.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  signUpText: {
    marginTop: 16,
    color: 'blue',
  },
});

export default LoginScreen;
