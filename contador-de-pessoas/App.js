import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function App() {

  const [contador, setContador] = useState(0)

  function atualizarContador(i){
    if(i)
      setContador(contador+1)
    else if (contador > 0)
        setContador(contador-1)
  }

  return (
    <View style = { styles.body }>
      <Text style = { styles.title }>Contador de Pessoas</Text>
      <Text style = { styles.contador }>{contador}</Text>
      <Pressable style = { styles.add } onPress={() => atualizarContador(true)}>
        <Text style = { styles.texto }>+</Text>
      </Pressable>
      <Pressable style = { styles.sub } onPress={() => atualizarContador(false)}>
        <Text style = { styles.texto }>-</Text>
      </Pressable>
    </View>
  );
}
