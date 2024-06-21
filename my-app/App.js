import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TextInput, View, ImageBackground } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [text1, setText1] = useState('Texto Default'); 
  const [text2, setText2] = useState('Texto Default'); 
  const [text3, setText3] = useState('Texto Default'); 

  const alerta = () =>{
    alert('Nombre: '+text1+'\nEmail: '+text2+'\nPassword: '+text3);
  };

  return (
    <ImageBackground source={require('./assets/fondo.png')} resizeMode="cover" style={styles.background}>
    <View style={styles.container}>
      
        <View style={{flex: 2}}/>

        <View style={styles.card}>
          <Text style={styles.texto}>Nombre:</Text>
          <TextInput style={styles.input} inputMode='text' onChangeText={(t)=>setText1(t)}/>

          <Text style={styles.texto}>Email:</Text>
          <TextInput style={styles.input} inputMode='email' onChangeText={(t)=>setText2(t)}/>

          <Text style={styles.texto}>Password:</Text>
          <TextInput style={styles.input} onChangeText={(t)=>setText3(t)} secureTextEntry/>

          <Button color='red' title="Guardar" onPress={() => {alerta();}}/>
        </View>

        <View style={{flex: 2}}></View>

        <StatusBar style="auto" />
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 3,
    backgroundColor: 'white',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  texto: {
    color: 'green',
    fontSize: 18,
  },
  input: {
    borderRadius: 5,
    height: 40,
    borderWidth: 3,
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },



  
});
