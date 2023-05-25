<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Infoicon from "@/components/icons/infoicon.vue";
</script>

<template>

  <WelcomeItem class="item1">
    <template #icon>
      <SupportIcon class="itemIcon heart" />
    </template>
    <template #heading>About Me</template>

    Hello! My name is Dominik  and I am a 27-year-old web developer. I consider myself a bit of a nerd and have a passion for all things in technology.
  </WelcomeItem>
  <WelcomeItem class="item2">
    <template #icon>
      <infoicon class="itemIcon info" />
    </template>
    <template #heading>Facts</template>
    One of my favorite aspects of my job is web design, as I love the creativity and problem-solving that goes into creating beautiful and functional websites.
  </WelcomeItem>
  <WelcomeItem class="item3">
    <template #icon>
      <DocumentationIcon class="itemIcon current" />
    </template>
    <template #heading>Currently</template>
     Working for Docunite® as a Solution Developer since  3 years.
  </WelcomeItem>

  <WelcomeItem class="item4">
    <template #icon>
      <ToolingIcon class="itemIcon tools"/>
    </template>
    <template #heading>Tooling</template>
      Working with VueJs, Webstorm, Git, Javascript, Typescript, CSS, SCSS
    <br />

  </WelcomeItem>

  <WelcomeItem class="item5">
    <template #icon>
      <EcosystemIcon class="itemIcon projects"/>
    </template>
    <template #heading>Projects</template>

    Projects Coming soon TM
  </WelcomeItem>


</template>

<style scoped lang="scss">
.itemIcon:hover{
  transform: scale(1.2);
}

.item1 {
  animation: item1 4s;
}
@keyframes item1 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.item2 {
  animation: item2 8s;
}
@keyframes item2 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.item3 {
  animation: item3 12s;
}
@keyframes item3 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.item4 {
  animation: item4 16s;
}
@keyframes item4 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.item5 {
  animation: item4 16s;
}
@keyframes item5 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.heart:hover{
  color: red;
}
.info:hover{
  color: blue;
}
.current:hover{
color:yellow;
}
.tools:hover{
  color: green;
}
.projects:hover{
animation: rotate 2s ;

}
@keyframes rotate {
  0% {transform: rotate(90deg);}
  50% {transform: rotate(180deg);}
  100% {transform: rotate(360deg);}
}
</style>