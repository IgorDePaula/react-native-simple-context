import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import {View, Text, StyleSheet} from 'react-native';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <View>
      <Text style={styles.title}>Igor</Text>
      <Text style={styles.h1}>Lista de filmes</Text>
      <Text style={styles.h2}>Numero de filmes: {movies.length}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  h1: {
    fontSize: 18,
  },
  h2: {
    fontSize: 13,
  },
});
export default Nav;
