import { Text, View, Pressable, TextInput, Image, Switch } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [escola, setEscola] = useState();
  const [limite, setLimite] = useState();
  const [status, setStatus] = useState();

  function confirmar() {
    let informacoes = 'Dados Informados:' + '\nNome: ' + nome + '\nIdade: ' + idade + '\nSexo: ' + sexo + '\nEscolaridade: ' + escola + '\nLimite: R$ ' + limite.toFixed(2) + '\nBrasileiro: ' + ((status) ? "Sim" : "Não")
    setDados(informacoes)
  }

  const [dados, setDados] = useState()

  return (
    <View>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
      />

      <Text style={styles.texto}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a sua idade"
        onChangeText={setIdade}
      />

      <Text style={styles.texto}>Sexo</Text>
      <Picker
        style={styles.input}
        selectedValue={sexo}
        onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
        <Picker.Item key={1} value="Feminino" label="Feminino" />
        <Picker.Item key={2} value="Masculino" label="Masculino" />
      </Picker>

      <Text style={styles.texto}>Escolaridade</Text>
      <Picker
        style={styles.input}
        selectedValue={escola}
        onValueChange={(itemValue, itemIndex) => setEscola(itemIndex)}>
        <Picker.Item key={1} value="Ensino Médio" label="Ensino Médio" />
        <Picker.Item key={2} value="Ensino Superior" label="Ensino Superior" />
        <Picker.Item key={2} value="Outros" label="Outros" />
      </Picker>

      <Text style={styles.texto}>Limite</Text>
      <Slider style = {styles.botoes}
        minimumValue={0}
        maximumValue={1000}
        onValueChange={(limiteSelecionado) => setLimite(limiteSelecionado)}
        value={limite}
        step={50}
        minimumTrackTintColor="green"
        maximumTrackTintColor="gray"
        thumbTintColor="black"
      />
      <Text style = {styles.limite}>
        {limite}
      </Text>

      <Text style={styles.texto}>Brasileiro</Text>
      <Switch style = {styles.botoes}
        value={status}
        onValueChange={(valorSwitch) => setStatus(valorSwitch)}
        thumbColor="red"
      />

      <Pressable style={styles.botao} onPress={confirmar}>
        <Text style={styles.textoBotao}>Confirmar</Text>
      </Pressable>

      <Text style={styles.resultado}>{dados}</Text>

    </View>
  );
}
