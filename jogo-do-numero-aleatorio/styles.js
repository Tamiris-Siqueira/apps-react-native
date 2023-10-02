import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: '40%',
  },
  imagem:{
    width: 300,
    height: 150,
    marginTop: 20,
    alignSelf: 'center'
  },
  texto:{
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: '5%'
  },
  botao:{
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgreen',
    backgroundColor: 'lightgreen',
    height: 40,
    margin: 40,
  },
  textoBotao:{
    fontSize: 25,
  },
  numero:{
    textAlign: 'center',
    fontSize: 40,
    color: 'red',
    textDecorationLine: 'underline'
  }
});

export {styles};