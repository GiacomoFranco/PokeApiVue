<script>
import PokemonCard from '@/components/PokemonCard.vue'
export default {
  components: {
    PokemonCard
  }
}
</script>
<template>
  <div class="pokemon-gallery">
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
  </div>
</template>
<style scoped>
.pokemon-gallery {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
</style>