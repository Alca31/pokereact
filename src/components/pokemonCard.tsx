import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <div className="pokemon-card">
    <p>n°{pokemon.pokedexId}</p>
    <h3>{pokemon.name}</h3>
    <img src={pokemon.sprite} alt={pokemon.name} />
    </div>
  );
}
