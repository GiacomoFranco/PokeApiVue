<script>
import SearchBar from '@/components/SearchBar.vue';
// import PokemonGallery from '@/components/PokemonGallery.vue';
import PokemonGalleryLoader from '@/components/PokemonGalleryLoader.vue';
import { defineAsyncComponent } from 'vue';

const PokemonGallery = defineAsyncComponent(() => import('@/components/PokemonGallery.vue'))

export default {
  components: {
    SearchBar,
    PokemonGallery,
    PokemonGalleryLoader
  },
}
</script>
<template>
  <img src="@/assets/pokeball-icon.png" alt="pokemon" class="pokeball-icon">
  <main class="left">
    <SearchBar />
    <Suspense>
      <PokemonGallery />
      <template #fallback>
        <PokemonGalleryLoader />  
      </template>
    </Suspense>
  </main>
  <RouterView />
</template>
<style scoped>
.pokeball-icon {
  position: absolute;
  top: -80px;
  left: -180px;
  z-index: -1;
  user-select: none;
}

.left {
  display: flex;
  flex-direction: column;
  margin: 0 10vw;
}
</style>