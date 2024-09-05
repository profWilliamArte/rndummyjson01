// app/tabs/movil.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Colors } from "@/constants/Colors";
import Cardprod from '../../components/Cardproduct'; // Asegúrate de que el nombre del archivo sea correcto

const API = 'https://dummyjson.com/products';

const Tienda = () => {
  const currentColors = Colors.dark;
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setDatos(data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: currentColors.text }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={{ color: currentColors.text, fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Móviles ({datos.length})</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => <Cardprod item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1} // Establece el número de columnas
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false} // Oculta el indicador de desplazamiento vertical
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
     
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer: {
      justifyContent: 'center', // Centra los cards horizontalmente
    },
  });

export default Tienda;