import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Movie = ({id, name, price}) => {
  return (
    <View>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.h1}>{name}</Text>
      <Text style={styles.h3}>$ {price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
  },
  id: {
    fontSize: 24,
  },
  h3: {
    fontSize: 13,
  },
});
export default Movie;
