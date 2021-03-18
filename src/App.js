import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);


  const getPokemon = e => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
};

  return (
    <div className="App">
      <button value="fetch API" onClick={getPokemon} >fetch API</button>
      {
      pokemon.map((poke, index) =>
        <p key={index}>{index}  {poke.name}</p>
        )
      }
    </div>
  );
}

export default App;
