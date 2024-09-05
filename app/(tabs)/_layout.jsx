// app/tabs/_layout.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

// Importa tus pantallas
import Movil from './movil';
import Laptop from './laptop';
import Kitchen from './kitchen';
import Tienda from './tienda';

const Tab = createBottomTabNavigator();

const Layout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Asigna el nombre del ícono según la ruta
          switch (route.name) {
            case 'Movil':
              iconName = 'mobile'; // Nombre del ícono en Entypo
              return <Entypo name={iconName} size={size} color={color} />;
            case 'Laptop':
              iconName = 'laptop';
              return <Entypo name={iconName} size={size} color={color} />;
            case 'Kitchen':
              iconName = 'kitchen-set'; // Asegúrate de que este ícono esté disponible
              return <FontAwesome6 name={iconName} size={size} color={color} />;
            case 'Tienda':
              iconName = 'storefront';
              return <Ionicons name={iconName} size={size} color={color} />;
            default:
              return null; // En caso de que no coincida con ninguna ruta
          }
        },
        headerShown: false, // Oculta el encabezado de las pestañas
        tabBarActiveTintColor: '#e53935', // Color del ícono activo
        tabBarInactiveTintColor: '#ffffff', // Color del ícono inactivo
        tabBarStyle: { backgroundColor: '#121212' }, // Estilo de la barra de pestañas
      })}
    >
      <Tab.Screen name="Movil" component={Movil} />
      <Tab.Screen name="Laptop" component={Laptop} />
      <Tab.Screen name="Kitchen" component={Kitchen} />
      <Tab.Screen name="Tienda" component={Tienda} />
    </Tab.Navigator>
  );
};

export default Layout;