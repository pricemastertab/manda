// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Adicione a lógica para verificar se a senha e a confirmação de senha coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem. Tente novamente.');
      return;
    }

    // Lógica de registro aqui
    console.log('Registro:', { email, password });

    // Após o registro, navegue para a próxima tela (por exemplo, a tela de login)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Conta</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirme a Senha"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <Button title="Registrar" onPress={handleRegister} />
      <Text style={styles.signInText} onPress={() => navigation.navigate('Login')}>
        Já tem uma conta? Faça login aqui.
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
  signInText: {
    marginTop: 16,
    color: 'blue',
  },
});

export default RegisterScreen;
