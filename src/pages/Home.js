import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Pressable, Button, StyleSheet } from 'react-native';
import { useEffect } from 'react';
function Home(props) {
  return (
    <ImageBackground source={require('../../assets/images/bibliotecas.jpeg')} style={styles.imageBackground}>
    <View>
    <Text style={styles.titulo}>Biblioteca Virtual SSC</Text>
    <View className="flex-1  flex-row self-center justify-around items-end p-5">
        <Text style={styles.texto}>Bem vindo à Biblioteca virtual SSC. Clique no botão abaixo para ter acesso aos nossos livros</Text>
      <Button title="Acessar o menu" onPress={() => props.navigation.navigate('Menu')} />
      <Button title="Acessar os meus favoritos" onPress={() => props.navigation.navigate('Favoritos')} />
    </View>

    </View>
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
    },
    titulo:{
        color:'white',
        fontFamily: 'Roboto',
        fontWeight:'bold',
        fontSize:30,
        backgroundColor:'rgba(79, 40, 40, 0.9)',
    },
    texto:{
        color:'white',
        backgroundColor:'rgba(79, 40, 40, 0.9)',
    }
  });