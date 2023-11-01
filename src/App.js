import React, { useState } from 'react';
import GenerationsList from './GenerationsList';
import PokemonSearch from './PokemonSearch';
import PokemonDetails from './PokemonDetails';
import './App.css';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearch = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        setSelectedPokemon({
          name: data.name,
          image: data.sprites.front_default,
          weight: data.weight,
          height: data.height,
        });
      })
      .catch(error => {
        console.error('Error al buscar el Pokémon:', error);
        setSelectedPokemon(null);
      });
  }

  return (
    <div>
      <GenerationsList />
      <PokemonSearch onSearch={handleSearch} />
      <PokemonDetails pokemon={selectedPokemon} />
    </div>
  );
}

export default App;

