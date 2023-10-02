import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View>
      <Text style={styles.titulo}>Anúncios da Hello</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={styles.anuncio}>
          <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMzaIwUCH0Jw0S-KUVLiyHLZPupHMij3EYWHL1-2IrFooIf6pysX1rmJGmTetDaq6_LLWGienNHwoV01-fNEo1bnXdCVW2Sk2yIgOmWwFa7_8NeinddLBN3w&usqp=CAE',
            }}
            style={styles.imagem}
          />
          <Text style={styles.descricao}>Chaveiro da Hello</Text>
        </View>
        <View style={styles.anuncio}>
          <Image
            source={{
              uri: 'https://down-br.img.susercontent.com/file/sg-11134201-7qvf8-li2tb3h97r0v06',
            }}
            style={styles.imagem}
          />
          <Text style={styles.descricao}>Estojo da Hello</Text>
        </View>
        <View style={styles.anuncio}>
          <Image
            source={{
              uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKrXFgLrhrKVb1KrDsc1erQXOMGbnUmEHL0lcHBN2RkGwGnfclftKq8OuwUfaHE7KWCftHeXGAq3_O1GU3z-Y76N35gVYsl0cSPJVtjIip&usqp=CAE',
            }}
            style={styles.imagem}
          />
          <Text style={styles.descricao}>Luminária da Hello</Text>
        </View>
        <View style={styles.anuncio}>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/I/71z76VRBhGL._AC_SX679_.jpg',
            }}
            style={styles.imagem}
          />
          <Text style={styles.descricao}>Tijela de Cerâmica</Text>
        </View>
        <View style={styles.anuncio}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdWV0TFaOqAzY5X3B0MASfJv966_ynu57Azgt_HuE75aHSE5iPPRSP8LNe1ntK9hYUAtEvSBL2fZc4sdrOJKCWs6MSYWh0IJO_pSnCzjv3SBzrXY13GtuJ&usqp=CAE',
            }}
            style={styles.imagem}
          />
          <Text style={styles.descricao}>Maquiagem da Hello</Text>
        </View>
      </ScrollView>
    </View>
  );
}
