import React from 'react'

import {StatusBar, Text} from 'react-native';
import Routes from './src/Routes'

export default function App() {
  return (
    
    <>
       <StatusBar hidden/>
      <Routes/>
    </>
  );
}