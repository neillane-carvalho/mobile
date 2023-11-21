import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Favoritos = ({ navigation }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        var favoriteList = [];

        const response = await axios.get('https://api-livros.azurewebsites.net/livros');
        const livrosData = response.data;

        for (key in livrosData) {
          const livro = livrosData[key];
          const userData = await AsyncStorage.getItem(`@livro_data_${livro.id}`);
          if (userData !== null) {
            var parsedUserData = JSON.parse(userData);
            if (parsedUserData.favorito)
              favoriteList.push(livro);
          }
        }

        favoriteList.reverse();

        setFavoritos(favoriteList);
      } catch (error) {
        console.error('Erro ao obter favoritos:', error);
      }
    };

    getData();
  }, []);

  return (
    <ScrollView>
      {favoritos.map((livro) => (
        <View key={livro.id} style={{ padding: 16 }}>
        <Text>{livro.nome}</Text>
          <Text>Autor: {livro.autor}</Text>
          <Text>Tipo: {livro.tipo}</Text>
          <Button
            title="Detalhes"
            onPress={() => {
              navigation.navigate('Livro', { livroId: livro.id , livroName: livro.nome, livroAutor: livro.autor, livroType: livro.tipo });
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Favoritos;
