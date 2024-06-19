import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'; /* Importaciones de componentes */
import React, {useState} from 'react'; /* Importaciones de librerias */

// const Texto =({estilo})=>{
//   const [contenido, setContenido] = useState('Hola tú');
//   const cambiarTexto = () => {
//     setContenido('Hola a todos');
//   } 
//   return (<Text style={[styles.text, estilo]} onPress={cambiarTexto}>{contenido}</Text>);
// } 

export default function App() {
  const [text, setText] = useState('Texto Default'); 
  const [submit, setSubmit] = useState(''); 

  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>

      <Text style={{color: "white",}} >Componente TextInput: {submit}</Text>
      <TextInput style={styles.input} placeholder='Soy un input :)' onChangeText={(t)=>setText(t)}/>

      <Button title='Presioname' style={{height: 40,}} onPress={()=>{setSubmit(text); alert('Alerta pendiente\n Alerta\n Alerta')}}></Button>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },

    input: {
      height: 40,
      margin: 12,
      borderWidth: 3,
      backgroundColor: '#212121',
      borderColor: 'white',
      color: "white",
      textAlign: 'center',
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
    countText: {
      color: '#FF00FF',
    },

  // text: {
  //   color: 'white',
  //   fontSize: 25,
  // },

  // red: {
  //   flex: 2,
  //   backgroundColor: 'red',
  // },

  // green: {
  //   flex: 2,
  //   backgroundColor: 'green',
  // },
  
  // blue: {
  //   flex: 2,
  //   backgroundColor: 'blue',
  // }

});
