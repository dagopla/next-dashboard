import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";
import Image from "next/image";

const getPkemons = async (limit=200,offset=0):Promise<SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data:PokemonsResponse = await response.json();
    return data.results.map((pokemon)=>({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
}
export default async function PokemonsPage() {
    const pokemonsList= await getPkemons();
  return (
    <div>
      <h1>Hello Page</h1>
      <div className="flex flex-wrap gap-10 items-center">
        {pokemonsList.map((pokemon)=>(
          <PokemonsGrid key={pokemon.id} {...pokemon}/>
        ))}
      </div>
    </div>
  );
}