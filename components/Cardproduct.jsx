// app/components/Cardprod.jsx
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import CustomButton from "./CustomButton";

const Cardprod = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.brand, styles.success]}>{item.brand}</Text>
        <Text style={[styles.price, styles.danger]}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          title="Ver Detalle"
          onPress={() => {
            // Aquí puedes manejar la apertura del modal
          }}
          type="danger"
          outline
          margin={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#121212',
    borderRadius: 8,
    padding: 12,
    margin: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: '100%', // Cambia el ancho a un porcentaje
    height: 600,
  },
  header: {
    alignItems: 'center',
  },
  image: {
    width: '100%', // Mantiene el ancho al 100% del card
    height: 350,
    borderRadius: 8,
  },
  body: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  brand: {
    fontSize: 16,
    margin: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  success: {
    color: '#4caf50',
  },
  danger: {
    color: '#e53935',
  },
});

export default Cardprod;