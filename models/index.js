import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CardsLivro = ({ navigation }) => {
    console.log(navigation);
  const livros = [
    [923, 'Crime e Castigo'],
    [1058, 'O idiota'],
    [294, 'Os demônios'],
    [542, 'Gente pobre'],
    [174, 'Memórias do subsolo'],
    [324, 'Noites brancas'],
    [998, 'Humilhados e ofendidos'],
    [875, 'O adolescente'],
  ];

  return (
    <View>
      {livros.map((livro) => (
        <TouchableOpacity
          key={livro[0]}
          style={styles.container}
          onPress={() => navigation.navigate('BookScreen')}
        >
          {/* Substitua `imageSource` pela URL da imagem correspondente ao livro */}
          <Image
            source={{ uri: 'URL_DA_IMAGEM' }}
            style={styles.image}
          />
          <Text style={styles.title}>{livro[1]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 180,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardsLivro;
