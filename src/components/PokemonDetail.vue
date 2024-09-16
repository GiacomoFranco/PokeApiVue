<template>
    <Teleport to='#app' >
      <div></div>
      <div class="blured-background">
        
      </div>
      <section class="pokemon-detail-card">
          <div class="pokemon-image">
            <img src="@/assets/carizard.gif" alt="">
          </div>
          <div class="info-container">
            
          </div>
      </section>
    </Teleport>
</template>
<style scoped>
.blured-background {
  position: fixed;
  top: 0px;
  left: 0px;
  /* background-color: aqua; */
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
}

.pokemon-detail-card {
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 771px;
  width: 1092px;
border-radius: 300px 300px 0 0;
  background-color: white;
}

</style>