import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SectionList, ActivityIndicator} from 'react-native'; /* Importaciones de componentes */
import React, {useState, useEffect} from 'react'; /* Importaciones de librerias */

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

  const [user,setUser]= useState([]);
  const [loading,setLoading] = useState(true);
  

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json()) 
      .then(data=>{setUser(data), setLoading(false)})
  },[])
 

  // Cargar el place holder
  if(loading){
    return <View style={styles.loading}> 
      <ActivityIndicator size={'large'} color={'green'}/>
      <Text>Cargando...</Text>
    </View>
  }


  return (
    <View style={styles.container}>

      <Text>Ya cargo</Text>
      
      <FlatList 
      data = {user}
      renderItem={({item})=> <Text >{item.name}</Text> } 
      />

      <SectionList sections = {[
          {
          title: 'Grupo A',
          data: [
            {key:1,name: 'Elias'},
            {key:2,name: 'Alan'},
            {key: 3,name: 'Pablo'},
            {key: 4,name: 'Victor'},
            {key: 5,name: 'Lili'}] 
          },
          {
            title: 'Grupo B',
            data: [
              {key:6,name: 'Elias'},
              {key:7,name: 'Alan'},
              {key: 8,name: 'Pablo'},
              {key: 9,name: 'Victor'},
              {key: 10,name: 'Lili'}] 
          },
          {
            title: 'Grupo C',
            data: [
              {key:11,name: 'Elias'},
              {key:12,name: 'Alan'},
              {key: 13,name: 'Pablo'},
              {key: 14,name: 'Victor'},
              {key: 15,name: 'Lili'}] 
          },
      ]} 
      renderItem={({item})=> <Text style={styles.item}>{item.name}</Text> } 
      renderSectionHeader={({section})=> <Text style={styles.section}>{section.title}</Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',  
    paddingTop: 60
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

  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'red',
    borderBottomWidth: 1
  },

  loading:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  section:{
    backgroundColor:'#f0f0f0',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 4,
    paddingBottom: 4,
  },

  textocarga:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }   

});
