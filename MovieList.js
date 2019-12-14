import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {View} from 'react-native';
import {MovieContext} from './MovieContext';
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <View>
      {movies.map(movie => (
        <Movie name={movie.name} id={movie.id} price={movie.price} key={movie.id} />
      ))}
    </View>
  );
};

export default MovieList;
