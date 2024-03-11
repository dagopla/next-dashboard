import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState{
    [key:string]:SimplePokemon
}
const initialState:PokemonsState = {
    '1':{id:'1',name:'bulbasaur'},
}

const pokemonsSlice = createSlice({
  name: 'second',
  initialState,
  reducers: {
    toggleFavorite(state, action:PayloadAction<SimplePokemon>){
        const {id}=action.payload;
        if(state[id]){
            delete state[id];
        }else{
            state[id]=action.payload;
        }
    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer