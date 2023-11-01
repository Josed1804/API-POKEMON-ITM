import React, { useState, useEffect } from 'react';

const GenerationsList = () => {
  const [generations, setGenerations] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/generation')
      .then(response => response.json())
      .then(data => setGenerations(data.results));
  }, []);

  return (
    <div className="generations-list">
      <h2>Listado de Generaciones</h2>
      <ul>
        {generations.map((generation, index) => (
          <li key={index}>{generation.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GenerationsList;

