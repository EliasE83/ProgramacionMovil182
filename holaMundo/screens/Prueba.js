import React, { useState } from 'react'
import { View, Text, Modal, Dimensions, TouchableOpacity } from 'react-native-web'
import { FontAwesome5 } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function Prueba() {

  const [modal, setModal] = useState(false);

  return (
    <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }        
    }>
        <Modal visible= {modal} animationType="fade">
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
            
            <View
              style={{
                width: width * 0.8,
                height: height * 0.4,
                backgroundColor: 'white',
                borderRadius: width * 0.02,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity 
                onPress={()=> setModal(false)}
                style={{
                  width: width * 0.03,
                  height: height * 0.02,
                  backgroundColor: '#f4f4f4',
                  borderRadius: width * 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  left: width * 0.2,
                }}
                >
                <FontAwesome5 name="times" size={width * 0.07} color="black" style={{}} />
                {/* <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Cerrar Modal</Text> */}
              </TouchableOpacity>
            </View>


          </View>
        </Modal>

          <TouchableOpacity 
          onPress={()=> setModal(true)}
          style={{
            width: width * 0.5,
            height: height * 0.07,
            backgroundColor: '#0088f0',
            borderRadius: width * 0.02,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Abrir Modal</Text>
          </TouchableOpacity>


    </View>
  )
}
