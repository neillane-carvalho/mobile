import React, { useState, useEffect } from 'react';
import { Button, ImageBackground, StyleSheet, View, Text, TextInput, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Livro({ route, navigation }) {
  const livroId = route.params?.livroId;
  const [comentarios, setComentarios] = useState('');
  const [favorito, setFavorito] = useState(false);

  // Carregar dados salvos ao entrar na tela
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedData = await AsyncStorage.getItem(`@livro_data_${livroId}`);
        if (savedData !== null) {
          const { comentarios, favorito } = JSON.parse(savedData);
          setComentarios(comentarios);
          setFavorito(favorito);
        }
      } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
      }
    };

    loadSavedData();
  }, [livroId]); // Atualize sempre que o livroId mudar

  // Salvar dados ao pressionar o botão "Voltar ao Menu"
  const saveData = async () => {
    try {
      const dataToSave = JSON.stringify({ comentarios, favorito });
      await AsyncStorage.setItem(`@livro_data_${livroId}`, dataToSave);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  // Salvar dados sempre que o valor do TextInput ou o valor do Switch mudar
  useEffect(() => {
    saveData();
  }, [comentarios, favorito])

  return (
    <ImageBackground
      source={require('../../assets/images/bibliotecas.jpeg')}
      style={styles.imageBackground}
    >
        {/* Switch de Favorito */}
        <View style={styles.favoritoContainer}>
          <Text style={styles.tituloScreen}>Livros</Text>
          <Text style={styles.switchLabel}>Marcar livro:</Text>
          <Switch
            value={favorito}
            onValueChange={() => setFavorito(!favorito)}
          />
        </View>

      <View style={styles.container}>
        <Text style={[styles.texto, styles.negrito]}>Livro - {route.params?.livroName}</Text>
        <Text style={[styles.texto, styles.negrito]}>Gênero: {route.params?.livroType}</Text>
        <Text style={[styles.texto, styles.negrito]}>Autor: {route.params?.livroAutor}</Text>

        {/* Campo de Comentários */}
        <Text style={styles.comentarios}>Comentários</Text>
        <TextInput
          style={styles.comentariosInput}
          placeholder="Digite seus comentários e anotações aqui"
          multiline
          value={comentarios}
          onChangeText={(text) => setComentarios(text)}
        />

        {/* Botão Voltar */}
        <Button
          title="Voltar"
          onPress={() => {
            saveData(); // Salvar dados antes de voltar ao menu
            navigation.goBack();
          }}
          style={styles.botao}
        />
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    texto: {
      fontSize: 20,
      color: 'black',
      fontFamily: 'Roboto',
      marginBottom: 10,
      backgroundColor:'rgba(255, 255, 255, 0.7)',
      width:'100%',
    },
    negrito: {
      fontWeight: 'bold',
    },
    comentariosInput: {
      height: 100,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
    },
    favoritoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      width:'100%',
      height:'8%',
      backgroundColor:'rgba(79, 40, 40, 0.9)',
    },
    switchLabel: {
      marginRight: 1,
      color: 'white',
      fontWeight:'bold',
      
    },
    botao: {
      width: '50%',
      marginVertical: 30,
    },
    tituloScreen:{
        color:'white',
        justifyContent:'flex-start',
        marginRight: '35%',
        fontSize:40,
        fontWeight:'bold',
    },
    comentarios:{
        color:'black',
    },
  });
