import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, getDocs, limit } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { FontAwesome } from '@expo/vector-icons';

export default function FeedScreen() {
  const [rotina, setRotina] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getTask = async () => {
      const rotinaRef = query(collection(db, 'Rotinas'), limit(10));
      const list = [];
      const querySnapshot = getDocs(rotinaRef);
      querySnapshot.then((docs) => {
        docs.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
          setRotina(list);
        });
      })
      
    };

    getTask().catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tarefas</Text>

        <TouchableOpacity style={styles.criarRotina} onPress={() => { navigation.navigate('Create') }}>
          <Text style={styles.buttonText}>Criar Rotina</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskContent} >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={rotina}
        renderItem={( item ) => {
          return(
          <View style={styles.rotinaItem}>
            <TouchableOpacity style={styles.starIcon}>
              <FontAwesome
                name='star'
                size={23}
                color={'white'}
              />
            </TouchableOpacity>
            <Text style={styles.rotinaText}>ola manha</Text>
          </View>
          )
        }}
      />
      </View>
      <View>
        <Text style={styles.teste }>ola 1234</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3498db',
  },
  titulo: {
    fontSize: 30,
    color: 'white',
  },
  criarRotina: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  rotinaItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    
  },
  starIcon: {
    marginRight: 15,
  },
  rotinaText: {
    fontSize: 18,
    color: '#333',
    width: '80%',
    alignContent: 'flex-start',
    padding: 12,
    paddingHorizontal: 20,
    marginBottom: 5,
    marginRight: 15,
  },
  taskContent: {
    flex: 1,
    paddingTop: 40,
    top: '-1400%',
  },
  teste: {
    top: '-1500%',
  }
});

// marginVertical: 10,
//     marginHorizontal: 20,
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
