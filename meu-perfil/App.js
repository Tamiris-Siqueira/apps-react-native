import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Aplicativo Meu Perfil</Text>

      <Image source={require('./assets/points.png')} style={styles.points} />
      <Image source={require('./assets/profile.jpg')} style={styles.profile} />

      <Text style={styles.label}>Dados Pessoais</Text>
      <Text style={styles.text}>Tâmiris Siqueira da Cruz</Text>

      <Text style={styles.label}>Formação</Text>
      <Text style={styles.text}>
        Análise e Desenvolvimento de Sistemas - FATEC PG
      </Text>

      <Text style={styles.label}>Experiência</Text>
      <Text style={styles.text}>
        Estagiária de Suporte - Age e Make Technology
      </Text>

      <Text style={styles.label}>Projetos</Text>
      <Text style={styles.text}>Bouman - Rede Social para Cientistas</Text>

      <Image source={require('./assets/points.png')} style={styles.points} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 30,
    backgroundColor: '#F8F9F9',
  },
  title: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  profile: {
    width: 200,
    height: 200,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 100,
  },
  label: {
    fontWeight: 'bold',
    color: '#F781BE',
    margin: 5,
  },
  text: {
    margin: 10,
    color: 'gray',
  },
  points: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 5,
  }
});

export default App;
