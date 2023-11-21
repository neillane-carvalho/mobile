import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Livro({ route, navigation }) {


  return (
    <View className="flex-1  flex-row self-center justify-around items-end p-5">
      <Text>{route.params?.livroName}</Text>
      <Text>{route.params?.livroType}</Text>
      <Text>{route.params?.livroAutor}</Text>
      <Button title="Voltar ao Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}