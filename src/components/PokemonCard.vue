<script>
export default {
  props: {
    id: Number,
    name: String,
    sprites: String,
    types: Array,
    loader: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    capitalizeString(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  computed: {
  },
}
</script>
<template>
  <div v-if="loader" class="pokemon-card">
    <img src="@/assets/pokeball-icon.png" alt="" class="pokeball-icon">
    <div class="gradient id-placeholder"></div>
    <div class="gradient name-placeholder"></div>
    <div class="category">
      <div class="gradient category-tag-placeholder"></div>
      <div class="gradient category-tag-placeholder"></div>
    </div>
  </div>
  <div v-else class="pokemon-card">
    <img :src="sprites" alt="">
    <h3 class="id">Nº{{ id }}</h3>
    <h2 class="name">{{ capitalizeString(name) }}</h2>
    <div class="category">
      <span v-for="singleType of types" class="category-tag" :class="singleType.type.name">{{ capitalizeString(singleType.type.name) }}</span>
    </div>
  </div>
</template>

<style scoped>
.pokemon-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  /* flex-grow: 1; */
  width: 15%;
  /* min-width: 315px; */
  /* min-width: 150px; */

  border-radius: 20px;
  box-shadow: #ededed 0 10px 10px;
  margin: 10px;
  margin-top: 90px;
  padding: 15px;
  padding-top: 100px;
  border: #8F9396;
  cursor: pointer;
}

.id {
  color: #8F9396;
  font-size: 12px;
  margin: 5px;
}

.name {
  margin: 5px;
}

img {
  position: absolute;
  top: -20%;
  /* width: 50%; */
  transform: scale(3, 3);
  image-rendering: pixelated;
}

.category {
  margin: 5px;
}

.category-tag {
  font-weight: 600;
  background-color: #ff9100;
  border-radius: 5px;
  padding: 1px 8px;
  margin: 5px;
  color: rgb(22, 22, 22);
}

.poison {
  background-color: #AB549A;
}

.grass {
  background-color: #78CD54;
}

.fire {
  background-color: #FF421C;
}

.flying {
  background-color: #669AFF;
}

.water {
  background-color: #2F9AFF;
}

.bug {
  background-color: #ABBC1C;
}

.normal {
  background: #BCBCAC;
}

.electric {
  background: #FFCD30;
}

.ground {
  background: #DEBC54;
}

.fairy {
  background: #FFACFF;
}

.fighting {
  background: #BC5442;
}

.psychic {
  background: #FF549A;
}

.rock {
  background: #BCAC66;
}

.steel {
  background: #ABACBC;
}

.ice {
  background: #78DEFF;
}

.ghost {
  background: #6666BC;
}

.dragon {
  background: #7866EF;
}

.dark {
  background: #785442;
}
</style>

<style scope>

.pokemon-card{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  
  /* flex-grow: 1;
  width: 30%;
  min-width: 315px; */
  /* min-width: 150px; */

  border-radius: 20px;
  box-shadow: #ededed 0 10px 10px;
  margin: 10px;
  margin-top: 90px;
  padding: 15px;
  padding-top: 100px;
  border: #8F9396;
  cursor: pointer;
}

.pokeball-icon{
  filter: contrast(0.7);
  height: 50px;  
  width: 50px;
}

.id-placeholder{
  height: 16px;
  width: 50px;
  margin: 5px;
  border-radius: 20px;
  background-color: #8f939658;
}

.name-placeholder{
  height: 20px;
  width: 120px;
  margin: 5px;
  border-radius: 20px;
  background-color: #8f939683;
}

.category {
  display: flex;
}

.category-tag-placeholder {
  height: 16px;
  width: 50px;
  margin: 5px;
  border-radius: 20px;
  background-color: #8f939658;
}


.gradient {
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #8f939658 8%, #f4f4f4 38%, #8f939658 54%);
    background-size: 1000px 640px;    
}

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}
</style>