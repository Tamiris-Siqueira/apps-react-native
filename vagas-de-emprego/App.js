import React, { Component, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { styles } from './styles';

export default function App() {
  let initial_vagas = [
        {id: 1, titulo: 'Desenvolvedor Backend', salario: 'R$ 3.000,00' , descricao: 'Realizar manutenção em sofwares utilizando Java', contato: 'backend@gmail.com'},
        {id: 2, titulo: 'Desenvolvedor Fronted', salario: 'R$ 3.000,00' , descricao: 'Realizar manutenção em softwares utilizando React', contato: 'frontend@gmail.com'},
        {id: 3, titulo: 'Engenheiro de Dados', salario: 'R$5.000,00', descricao: 'Projetar e implementar pipelines de dados com Power BI', contato: 'dados@gmail.com'},
        {id: 4, titulo: 'UX Designer', salario: '2.500.00', descricao: 'Criar Interfaces de usuário Mobile First e Desktop utilizando Figma', contato: 'designer@gmail.com'},
        {id: 5, titulo: 'Analista DevOps', salario: 'R$5.000,00', descricao: 'Gerenciamento de artefato binário e varreduras automatizadas SAST', contato: 'devops@gmail.com'},
        {id: 6, titulo: 'Scrum Master', salario: 'R$7.000,00', descricao: 'Acompanhar o desempenho dos times, garantindo sua capacidade de produção', contato: 'scrum@gmail.com'}
      ]

  const [vagas, setVagas] = useState(initial_vagas)

  return(
    <View>

      <Text style = { styles.titulo }>Vagas</Text>

      <FlatList
      data={vagas}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Vagas data={item}/>}
      />
    </View>
  )
}

function Vagas(props){
  return(
    <View style = {styles.anuncio}>
      <Text style = { styles.nome }> {props.data.titulo} </Text>
      <Text style = { styles.descricao }> Salário: {props.data.salario} </Text>
      <Text style = { styles.descricao }> Descrição: {props.data.descricao} </Text>
      <Text style = { styles.descricao }> Contato: {props.data.contato} </Text>
    </View>
  );
}
