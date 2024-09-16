import axios from "axios";
const url = "https://pokeapi.co/api/v2/pokemon";
const sprites = "https://img.pokemondb.net/sprites/black-white/anim/normal/";
const backSprites = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/";

const pokeApi = axios.create({
  baseURL: url,
});

export class PokemonsService {
  getPokemons(cantidad) {
    let pokemonsUrl = [];

    for (let index = 1; index <= cantidad; index++) {
      pokemonsUrl.push(`${url}/${index}`);
    }
    
    return axios
      .all(pokemonsUrl.map((pokemonUrl) => axios.get(pokemonUrl)))
      .then((responses) => responses.map((pokemon) => {
        let pokemonData = pokemon.data;
        pokemonData.animated_sprites = `${sprites + pokemonData.name}.gif`;
        return pokemonData
      }));
  }

  getPokemon(nombre) {
    return (response = pokeApi.get(`/${nombre}`).then((pokemon) =>  pokemon.data));
  }
}

export const pokemonsService = new PokemonsService();
