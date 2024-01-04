// CreateRoutineScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';

const CreateRoutineScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleCreateRoutine = async (title, description) => {
    const docRef = await addDoc(collection(db, "Rotinas"), {
      Descricao: description,
      titulo: title
    });
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Rotina</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <Button title="Enviar" onPress={handleCreateRoutine(title,description)} />
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
});

export default CreateRoutineScreen;
