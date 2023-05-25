<script setup>

import TheWelcome from './components/TheWelcome.vue'

import AboutMe from "@/components/About-me.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/ITSME.jpg" width="350" height="350" />

    <div class="wrapper">
      <about-me msg="Dominik Dörrier" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 25% 0 25% 0;

}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
