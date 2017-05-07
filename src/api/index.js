import { get } from 'axios';

export const getPokemon = () => get('http://pokeapi.co/api/v2/pokemon');
