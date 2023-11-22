import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Menu = ({ navigation }) => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const obterLivrosDaApi = async () => {
      try {
        const response = await axios.get('https://api-livros.azurewebsites.net/livros');
        const livrosData = response.data;
        setLivros(livrosData);
      } catch (error) {
        console.error('Erro ao obter livros da API:', error);
      }
    };

    obterLivrosDaApi();
  }, []);

  return (
    <ImageBackground source={require('../../assets/images/bibliotecas.jpeg')} style={styles.imageBackground}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.botaoHome}
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Text style={styles.botaoHomeTexto}> ↩ </Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>Menu de Livros</Text>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          {livros.map((livro) => (
            <TouchableOpacity
              key={livro.id}
              style={styles.livroContainer}
              onPress={() => {
                navigation.navigate('Livro', { livroId: livro.id, livroName: livro.nome, livroAutor: livro.autor, livroType: livro.tipo });
              }}
            >
              <Text style={styles.nomeLivro}>{livro.nome}</Text>
              <Text>Autor: {livro.autor}</Text>
              <Text>Tipo: {livro.tipo}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Menu;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opacidade de 0.5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    padding: 16,
  },
  livroContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  nomeLivro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  botaoHome: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoHomeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
