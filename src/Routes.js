import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Livro from './pages/Livro'
const Stack= createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Stack.Screen name="Livro" component={Livro} options={{headerShown: false}} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}