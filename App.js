import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function contarCliques (){
  const [contador, contar] = useState (0);

  const incrementar = () => {
    contar (contador + 1);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87CEFA',
      alignItems: 'center',
      justifyContent: 'center',
    },

    conjunto:{
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 22,
      marginBottom: 10,
      alignItems: 'center',
    },

    text: {
      padding: 10,
      borderRadius: 25,
      fontSize: 22,
      marginBottom: 20,
    },

    button:{
      backgroundColor: '#2E8B57',
      borderRadius: 20,
      padding: 10,
      width: 200
    },

    buttonText:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      lineHeight: 40,
    },
 
  });

  return (
    <View style={styles.container}>
      <View style={styles.conjunto}>
        <Text style={styles.text} >Você pressionou: {contador} </Text>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text style={styles.buttonText}>Pressione-me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default contarCliques;


