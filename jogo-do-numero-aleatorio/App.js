import { useState } from 'react'
import { View, Text, Pressable, TextInput, Image } from 'react-native'
import {styles} from './styles'

export default function App(){

  const [numero, setNumero] = useState()

  return(
    <View>
      <Text style = {styles.titulo}>Jogo do Nº Aleatório</Text>

      <Image source={{ uri:'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/09/legiao_YucN3gK_hER0.jpg.webp'}} style = {styles.imagem}/>
      <Text style = {styles.texto}>Pense em um nº de 0 a 10...</Text>

      <Text style = {styles.numero}>{numero}</Text>

      <Pressable style = {styles.botao} onPress={() => setNumero(Math.floor(Math.random() * 11))}>
        <Text style = {styles.textoBotao} >Descobrir</Text>
      </Pressable>

    </View>
  )
}
