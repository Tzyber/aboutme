<script setup>

import TheWelcome from "@/components/TheWelcome.vue";
import AboutMe from "@/components/About-me.vue";
</script>

<template>
  <header >

    <img alt="my_Image" class="logo" src="../assets/ITSME.jpg" width="350" height="350" />

    <div class="wrapper">
      <about-me msg="Dominik Dörrier" />
    </div>
  </header>

  <main class="">
    <TheWelcome />

  </main>
</template>

<style lang="scss" scoped >


</style>