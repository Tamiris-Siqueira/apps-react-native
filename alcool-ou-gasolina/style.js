import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo:{
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
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
    fontSize: 15,
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
    margin: 50
  },
  textoBotao:{
    fontSize: 25,
  },
  resultado:{
    textAlign: 'center',
    fontSize: 20,
  }
});

export {styles};