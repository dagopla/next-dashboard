'use client'

import { useAppSelector } from "@/sotre"
import { PokemonsGrid } from "./PokemonsGrid";
import { SimplePokemon } from "..";
import { IoHeart } from 'react-icons/io5';

export const FavoritePokemon = () => {
    const pokemons:SimplePokemon[] = useAppSelector(state => Object.values(state.pokemons));
  return (
    <>
    {
      pokemons.map(pokemon => <PokemonsGrid key={pokemon.id} {...pokemon} />)
    }
    {
      pokemons.length === 0 && (
        <div className="w-full h-full flex items-center justify-center">
          <IoHeart size={50} className="text-red-500"/>
          <p className="text-2xl text-slate-500">No favorite pokemons yet</p>
        </div>
      )
    }
    </>
    
  )
}
