import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
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
    <ScrollView>
      {livros.map((livro) => (
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

export default Menu;