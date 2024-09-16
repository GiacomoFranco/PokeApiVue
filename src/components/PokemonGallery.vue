<script>
import { pokemonsService } from '../../services/pokemons.service'
import PokemonCard from '@/components/PokemonCard.vue'

export default {
  components:{
    PokemonCard
  },
  data() {
    return {
      service: pokemonsService,
      pokemons: []
    }
  },
  computed: {
    pokemonName(){
      return (pokemon) => this.capitalizeString(pokemon.name)
    },
    pokemonTypeName(){
      return (type) => type.name
    }
  },
  methods: {
    async getPokemons(pokemonsAmount) {
      this.pokemons = await this.service.getPokemons(pokemonsAmount);
    },
    async getPokemon(pokemonId) {
      this.pokemons = await this.service.getPokemons(pokemonsAmount);
    },
  },
  created() {
    this.getPokemons(200)
  }
}
</script>
<template>
  <div class="pokemon-gallery">
    <PokemonCard  
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :loader="false"
      :id="pokemon.id"
      :name="pokemon.name" 
      :types="pokemon.types"
      :sprites="pokemon.animated_sprites"
      @click="getPokemon()"/>
  </div>
</template>
<style scoped>  
.pokemon-gallery{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
</style>