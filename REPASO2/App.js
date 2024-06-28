import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList ,SectionList, Button, TextInput, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react'; 

export default function App() {

  const peliculas = [
    {name: 'Cars', year:'2006'},
    {name: 'Robot Dreams', year:'2023'},
    {name: 'Toy Story', year:'1999'},
    {name: 'Avengers', year:'2012'},
    {name: 'Mid90s', year:'2018'},
    {name: 'Joker 2', year:'2024'},
    {name: 'Deadpool & Wolverine', year:'2024'},
    {name: 'Challenguers', year:'2024'},
    {name: 'Dune 2', year:'2024'},
    {name: 'Spiderman Across the SpiderVerse', year:'2023'},
  ]

  return (
    <ImageBackground source={require('./assets/fondo.png')} resizeMode="cover" style={styles.background}>
    <View style={styles.container}>
    
      <View style={styles.botonera}>
        <Text style={{fontSize: 30, color: 'white'}}>Buscador de Películas</Text>
        <TextInput style={styles.input}></TextInput>
        <Button title='BUSCAR'></Button>
      </View>      

      <FlatList data = {peliculas} 
        renderItem={({item})=> <Text style={styles.item} >{item.name}</Text> } 
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
    backgroundColor: '#212121'   
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
    color: 'red'
  },

  botonera:{
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
