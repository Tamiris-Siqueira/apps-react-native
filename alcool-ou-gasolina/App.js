import { Text, View, Pressable, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function App() {

  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)

  function calcular(){
    if(alcool / gasolina < 0.7)
      alert("O derivado da cana-de-açúcar é o melhor!")
    else
      alert("A gasolina é melhor!")
  }

  return (
    <View>

      <Text style = {styles.titulo} >Álcool ou Gasolina</Text>

      <Image source={{ uri: 'https://site.vistoriapro.com.br/blog/wp-content/uploads/2019/04/qual-vale-mais-a-pena-gasolina-ou-etanol-aprenda-a-fazer-a-conta-para-economizar.png'}} style={styles.imagem}/>

      <TextInput style = {styles.input} placeholder="Preço do Álcool" onChangeText = {setAlcool}/>
      <TextInput style = {styles.input} placeholder="Preço da Gasolina" onChangeText = {setGasolina}/>
      
      <Pressable style = {styles.botao} onPress={calcular}>
        <Text style = {styles.textoBotao} >Verificar</Text>
      </Pressable>

    </View>
  );
}
