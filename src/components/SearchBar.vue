<script>
import { pokemonsService } from '../../services/pokemons.service'

export default {
  data() {
    return {
      service: pokemonsService
    }
  },
}
</script>
<template>
  <div class="search-bar">
    <input type="text" placeholder="Busca tu Pokemón" class="search-input" title="filterPokemon">
    <div class="search-button">
      <img src="@/assets/search.svg" alt="" class="search-icon">
    </div>
  </div>
</template>
<style scoped>
.search-bar{
display: flex;
justify-content: center;
align-items: center;
background-color: white;
width: 100%;
border-radius: 20px;
margin: 30px 10px;
padding: 0 15px;
overflow: hidden;
position: relative;
outline: none;
box-shadow: #ededed 0 10px 10px;
}

.search-input{
  position: relative;
  border: none;
  outline: none;
  display: flex;
  flex-grow: 1;
  min-width: 100px;
  padding: 20px;
  font-size: 18px;
}

.search-button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF5350;
  box-shadow: #ff535088 5px 5px 15px;
  border-radius: 10px;
  min-width: 40px;
  min-height: 40px;
  cursor: pointer;

}

.search-icon{
  width: 20px;
  height: 20px;
  filter: invert(100%);
  }

</style>