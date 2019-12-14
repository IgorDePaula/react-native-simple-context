import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';
import {TextInput, Button, View, Text} from 'react-native';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [Id, setId] = useState('');
  const [movies, setMovies] = useContext(MovieContext);
  const updateName = e => {
    setName(e);
  };
  const updatePrice = e => {
    setPrice(e);
  };
  const updateId = e => {
    setId(e);
  };

  const AddMovie = () => {
    setMovies(prevMovies => {
      let index = prevMovies.findIndex(i => i.id == Id);
      if (index > -1) {
        let movies = prevMovies.splice(index, 1, {
          name: name,
          price: price,
          id: Id,
        });
        return [...prevMovies];
      } else {
        return [
          ...prevMovies,
          {name: name, price: price, id: movies.length + 1},
        ];
      }
    });
  };

  return (
    <>
      <TextInput onChangeText={id => updateId(id)} value={Id} />
      <TextInput onChangeText={name => updateName(name)} value={name} />
      <TextInput onChangeText={text => updatePrice(text)} value={price} />
      <Button
        title={'Salvar'}
        onPress={AddMovie}
      />
    </>
  );
};
export default AddMovie;
