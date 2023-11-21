import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Pressable, Button } from 'react-native';
import { useEffect } from 'react';
import {biblioteca} from '../../assets/images/bibliotecas.jpeg'
function Home(props) {
  return (
    <ImageBackground source={biblioteca} className="w-full h-full z-3">

    <View className="flex-1  flex-row self-center justify-around items-end p-5">
      <Button title="Menu" onPress={() => props.navigation.navigate('Menu')} />
    </View>

    </ImageBackground>
  );
}

export default Home;