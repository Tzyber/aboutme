<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>About Me</template>

    Hello! My name is Dominik  and I am a 27-year-old web developer. I consider myself a bit of a nerd and have a passion for all things technology. One of my favorite aspects of my job is web design, as I love the creativity and problem-solving that goes into creating beautiful and functional websites.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Currently</template>
     Workng for Docunite® as a Solution Developer since  3 years.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>
      Working with VueJs, Webstorm, Git, Javascript, Typescript, css, SCSS
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Projects</template>

    Projects Coming soon TM
  </WelcomeItem>


</template>
