import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, TextInput, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';

const peliculas = [
  { name: 'Cars', year: '2006' },
  { name: 'Robot Dreams', year: '2023' },
  { name: 'Toy Story', year: '1999' },
  { name: 'Avengers', year: '2012' },
  { name: 'Mid90s', year: '2018' },
  { name: 'Joker 2', year: '2024' },
  { name: 'Deadpool & Wolverine', year: '2024' },
  { name: 'Challengers', year: '2024' },
  { name: 'Dune 2', year: '2024' },
  { name: 'Spiderman Across the SpiderVerse', year: '2023' },
];

export default function App() {
  const [texto, setTexto] = useState('');
  const [filtro, setFiltro] = useState([]);

  const buscar = () => {
    if (texto === '') {
      setFiltro(peliculas);
    } else {
      const busqueda = peliculas.filter(movie =>
        movie.name.toLowerCase().includes(texto.toLowerCase())
      );
      if (busqueda.length > 0) {
        setFiltro(busqueda);
      } else {
        alert('No se encontraron coincidencias');
        setFiltro([]);
      }
    }
  };

  return (
    <ImageBackground source={require('./assets/fondo2.jpg')} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        <View style={styles.botonera}>
          <Text style={{ fontSize: 30, color: 'white' }}>Buscador de Películas</Text>
          <TextInput
            style={styles.input}
            value={texto}
            onChangeText={setTexto}
            placeholder="Escribe el nombre de la película"
            placeholderTextColor="grey"
          />
          <Button title='BUSCAR' onPress={buscar} />
        </View>

        <FlatList
          data={filtro}
          
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#212121'
    paddingTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    backgroundColor: '#212121',
    borderColor: 'white',
    color: "white",
    textAlign: 'center',
    width: '100%'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'red',
    borderBottomWidth: 1,
    color: 'white'
  },
  botonera: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
