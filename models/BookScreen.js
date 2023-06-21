import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookScreen = ({ route }) => {
  const { id } = route.params;

  const livroInfo = {
    nome: 'Nome do Livro',
    numPaginas: 300,
    sinopse: 'Sinopse do livro...',
    autor: 'Autor do Livro',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{livroInfo.nome}</Text>
      <Text>Número de páginas: {livroInfo.numPaginas}</Text>
      <Text style={styles.sinopse}>{livroInfo.sinopse}</Text>
      <Text>Autor: {livroInfo.autor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sinopse: {
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default BookScreen;
