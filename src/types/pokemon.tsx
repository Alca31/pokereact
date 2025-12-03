export interface Pokemon {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  apiTypes: {name:string, image: string}[];
  apiEvolutions: {name: string, pokedexId:number}[];
}