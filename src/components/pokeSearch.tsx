import { useState } from "react";

interface Props {
  onSearch: (value: string) => void;//
}

export function PokeSearch({ onSearch }: Props) {

  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  }

  return (
    <div>
      <h2>Rechercher un Pokémon</h2>
      <input 
        type="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="par nom ou par pokedex ID"
      />
    </div>
  );
}
