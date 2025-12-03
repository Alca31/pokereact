import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { getPokedex } from './services/API';
import type { Pokemon } from './types/pokemon';
import { PokemonList } from './components/pokemonList';
import { PokemonDetail } from './components/pokemonDetail';
import './App.css';

function App() {

  
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pkmnCount, setPkmncount] = useState(151);
  useEffect(() => {
    getPokedex(pkmnCount).then(pokemons => setPokemonList(pokemons));
  }, [pkmnCount]);
  return (
    <div className='App'>
       <PokemonList pokemons={pokemonList} /> 
       <PokemonDetail/>
    </div>
  )
}

export default App;