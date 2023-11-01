import React, { useState } from 'react';

const PokemonSearch = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(pokemonName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={pokemonName} 
        onChange={(e) => setPokemonName(e.target.value)} 
        placeholder="Ingrese el nombre del Pokémon" 
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default PokemonSearch;
