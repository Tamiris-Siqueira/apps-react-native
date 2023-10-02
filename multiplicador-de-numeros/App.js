import { Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function App() {

  const [primeiro, setPrimeiro] = useState()
  const [segundo, setSegundo] = useState()
  const [resultado, setResultado] = useState()

  function calcular(){
      r = primeiro * segundo
      setResultado('O resultado é: ' + r)
  }

  return (
    <View style = {styles.body} >

      <Text style = {styles.titulo} >Multiplicador de Números</Text>

      <TextInput style = {styles.input} placeholder="Digite o primeiro número" onChangeText = {setPrimeiro}/>
      <TextInput style = {styles.input} placeholder="Digite o segundo número" onChangeText = {setSegundo}/>
      
      <Pressable style = {styles.botao} onPress={calcular}>
        <Text style = {styles.textoBotao} >Calcular</Text>
      </Pressable>

      <Text style = {styles.resultado} >{ resultado }</Text>
    </View>
  );
}
