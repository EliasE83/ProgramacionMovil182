import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native'; /* Importaciones de componentes */
import React, {useState} from 'react'; /* Importaciones de librerias */

const Texto =({estilo})=>{
  const [contenido, setContenido] = useState('Hola tú');
  const cambiarTexto = () => {
    setContenido('Hola a todos');
  } 
  return (<Text style={[styles.text, estilo]} onPress={cambiarTexto}>{contenido}</Text>);
} 

export default function App() {
  return (
    <View style={styles.container}>
      
      <Texto estilo={styles.red}></Texto>

      <Texto estilo={styles.green}></Texto>

      <Texto estilo={styles.blue}></Texto>
      
      {/* <Button onPress={Texto.cambiarTexto} title="Presioname" color="#212121"></Button>  */}
      <StatusBar style="auto" />   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 25,
  },

  red: {
    flex: 2,
    backgroundColor: 'red',
  },

  green: {
    flex: 2,
    backgroundColor: 'green',
  },
  
  blue: {
    flex: 2,
    backgroundColor: 'blue',
  }

});
