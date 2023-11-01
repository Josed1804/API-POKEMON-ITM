import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  return (
    <div>
      <h2>Detalles del Pokémon</h2>
      {pokemon ? (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>Peso: {pokemon.weight}</p>
          <p>Altura: {pokemon.height}</p>
        </div>
      ) : (
        <p>¡Seleccione un Pokémon para ver los detalles!</p>
      )}
    </div>
  );
}

export default PokemonDetails;
