import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './StoreScreen';
import Descripcion from "./Descripcion";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Tienda" component={DetailScreen} options={{title: "Tienda"}} />
        <Stack.Screen name="Desc" component={Descripcion} options={{title: "Detalles"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}