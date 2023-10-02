import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: '40%',
  },
  imagem:{
    width: 200,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  },
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 30,
    fontSize: 20,
    padding: 10,
    width: '80%',
    alignSelf: 'center'
  },
  botao:{
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgreen',
    backgroundColor: 'lightgreen',
    height: 40,
    margin: 50,
  },
  textoBotao:{
    fontSize: 25,
  },
  classificacao:{
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
    textDecorationLine: 'underline'
  }
});

export {styles};