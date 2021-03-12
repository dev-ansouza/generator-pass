import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

export default function App(){

  let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const[password, setPassword] = useState('');

  const[size, setSize] = useState(5);

  function generatePass(){
    
    let pass = '';

    for (let i = 0, n = charSet.length; i < size; i++){
      pass += charSet.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);
  }

  function copyPass(){
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!');
  }

  return(
    <View style={styles.container}>
      
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.caracters}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="orange"
          maximumTrackTintColor="black"
          value={size}
          onValueChange={ (valor) => setSize(valor.toFixed(0)) }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
          <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      
      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}> {password} </Text>
        </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo:{
    marginBottom: 60
  },
  caracters:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7
  },
  button:{
    backgroundColor: "#FFA200",
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
});