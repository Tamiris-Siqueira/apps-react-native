import { useState } from 'react'
import { View, Text, Pressable, TextInput, Image } from 'react-native'
import {styles} from './styles'

export default function App(){
  const [classificacao, setClassificacao] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()

  function verificar(){
    imc = peso / (altura * altura)
    if(imc < 18.8)
      setClassificacao('Abaixo do peso')
    else if (imc < 24.9)
      setClassificacao('Peso normal')
    else if (imc < 29.9)
      setClassificacao('Sobrepeso')
    else if (imc < 34.9)
      setClassificacao('Obesidade Grau I')
    else if (imc < 39.9)
      setClassificacao('Obesidade Grau II')
    else
      setClassificacao('Obesidade Grau III')
  }

  return(
    <View>
      <Text style = {styles.titulo}>Cálculo de IMC</Text>

      <Image source={{ uri:'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk=w600-h300-pc0xffffff-pd'}} style = {styles.imagem}/>

      <TextInput
      style = {styles.input}
      placeholder = "Digite o seu peso"
      onChangeText = {setPeso}
      />

      <TextInput
      style = {styles.input}
      placeholder = "Digite a sua altura"
      onChangeText = {setAltura}
      />

      <Pressable style = {styles.botao} onPress={verificar}>
        <Text style = {styles.textoBotao} >Verificar</Text>
      </Pressable>

      <Text style = {styles.classificacao}>{classificacao}</Text>

    </View>
  )
}
