'use client'
import React from 'react'
import { SimplePokemon } from '..'
import Link from 'next/link'
import Image from 'next/image'
import { IoHeart, IoHeartCircleOutline, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/sotre';
import { toggleFavorite } from '@/sotre/pokemons/pokemons'

export const PokemonsGrid = ({ id, name }: SimplePokemon) => {
    const isFavorite=useAppSelector(state=>!!state.pokemons[id]);
    const dispatch=useAppDispatch();
    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt={name}
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
                    <div className="mt-5">
                    <Link href={`/dashboard/pokemons/${name}`} 
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más información
                    </Link>
                        
                    </div>
                </div>
                <div className="border-b cursor-pointer" onClick={()=>dispatch(toggleFavorite({ id, name }))}>
                        <span className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-green-600">
                            
                                {isFavorite ? <IoHeart size={20} color={'red'} /> 
                                : <IoHeartOutline size={20} color={'gray'} />}
                            
                            </div>
                     
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    
                                    <span className="pl-1">Favoritos</span>
                                </p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                            </div>
                        </span>

                </div>


            </div>
        </div>
    )
}
