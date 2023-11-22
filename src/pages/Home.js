import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

function Home(props) {
  return (
    <ImageBackground source={require('../../assets/images/bibliotecas.jpeg')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Biblioteca Virtual SSC</Text>
        <Text style={styles.texto}>Bem-vindo à Biblioteca virtual SSC. Clique nos botões abaixo para ter acesso aos nossos livros</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Menu')}
            style={styles.botao}
          >
            <Text style={styles.botaoTexto}>Acessar menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Favoritos')}
            style={styles.botao}
          >
            <Text style={styles.botaoTexto}>Meus favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" backgroundColor="rgba(79, 40, 40, 0.9)" />
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(79, 40, 40, 0.9)',
    padding: 20,
  },
  titulo: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  texto: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
