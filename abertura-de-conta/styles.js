import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo:{
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  texto:{
    fontSize: 20,
    marginLeft: '7%'
  },
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
    padding: 10,
    width: '80%',
    alignSelf: 'center'
  },
  limite:{
    textAlign: 'center',
    fontSize: 20
  },
  botoes:{
    alignSelf: 'center',
    width: '80%'
  },
  botao:{
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightblue',
    backgroundColor: 'lightblue',
    height: 40,
    margin: 50
  },
  textoBotao:{
    fontSize: 25,
  },
  resultado:{
    fontSize: 25,
    margin: 15,
  }
});

export {styles};