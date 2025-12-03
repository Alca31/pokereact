import { useState, useEffect } from "react";
import { PokeSearch } from "./pokeSearch";
import { PokemonCard } from "./pokemonCard";
import { getPokemon } from "../services/API";
import type { Pokemon } from "../types/pokemon";

export function PokemonDetail() {

  const [query, setQuery] = useState("");
  const [pokemonDetail, setPokemonDetail] = useState<Pokemon | null>(null);
  const [evolutions, setEvolutions] = useState<Pokemon[]>([]);

  function handleSearch(value: string) {
    setQuery(value.toLowerCase());
  }

  useEffect(() => {
    if (!query) return;

    async function fetchAll() {
      try {
        // --- Pokémon principal
        const data = await getPokemon(query);
        setPokemonDetail(data);



        // --- Si pas d’évolution → vide
        if (!data.apiEvolutions.length) {
          setEvolutions([]);
          return;
        }

        // --- Fetch de TOUTES les évolutions en parallèle
        const evolutionIDs = data.apiEvolutions.map((evo: { name: string; pokedexId: number })=> (evo.pokedexId));
        
        const evolutionsData = await Promise.all(
          evolutionIDs.map((id: number) => getPokemon(id))
        );

        setEvolutions(evolutionsData);
        
      } catch (err) {
        setPokemonDetail(null);
        setEvolutions([]);
      }
    }

    fetchAll();
  }, [query]);

  return (
    <div>
      <PokeSearch onSearch={handleSearch} />

      {pokemonDetail ? (
        <div className="pokemon-detail">
          <p>n°{pokemonDetail.pokedexId}</p>
          <img src={pokemonDetail.image} alt={pokemonDetail.name} />
          <h2>{pokemonDetail.name}</h2> 
        {pokemonDetail.apiTypes.map((type: { name: string; image: string }) => (
        <img key={type.name} src={type.image} alt={type.name} />))}

          

          {/* ---- Toutes les évolutions ---- */}
          {evolutions.length > 0 && (
            <div className="evolution">
              <h3>Évolutions :</h3>
              {evolutions.map((evo: Pokemon) => (
                <PokemonCard key={evo.pokedexId} pokemon={evo} />
              ))}
            </div>
          )}
        </div>
      ) : (
        query && <p>Aucun Pokémon trouvé.</p>
      )}
    </div>
  );
}
