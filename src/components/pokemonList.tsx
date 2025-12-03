import { PokemonCard } from "./pokemonCard";
import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemons: Pokemon[];
}

export function PokemonList({ pokemons }: Props) {
  
  return (
    <div className="pokemon-list">
      {pokemons.map(pkmn => (
        <PokemonCard key={pkmn.id} pokemon={pkmn} />
      ))}
    </div>
  );
}
