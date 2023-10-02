import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body:{
    paddingTop: '30%'
  },
  titulo:{
    color: 'orange',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
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
    borderColor: 'blue',
    backgroundColor: 'blue',
    height: 40,
    margin: 50,
  },
  textoBotao:{
    fontSize: 25,
    color: 'white'
  },
  resultado:{
    textAlign: 'center',
    fontSize: 30,
    color: 'green',
  }
});

export {styles};