<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Infoicon from "@/components/icons/infoicon.vue";
import {ref} from "vue";
import CurrentStatusIcon from "@/components/icons/CurrentStatusIcon.vue";

const counter = ref(0)
function triggerEvent() {
  counter.value += 1

  if (counter.value === 10){
   setTimeout(() => {
     counter.value = 0
   }, 2000)
  }
}

function   iconClass() {
if (counter.value > 10)
  return "big_Heart"

  return "itemIcon heart"
}
</script>

<template>
  <WelcomeItem class="item1">
    <template #icon>
      <button class="invisButton">
      <SupportIcon :class="iconClass()" @click="triggerEvent" />
      </button>
    </template>
    <template #heading>About Me</template>

    Hello! My name is Dominik and I am a 27-year-old web developer. I consider myself a bit of a nerd and have a passion for all things in technology.
  </WelcomeItem>
  <WelcomeItem class="item2">
    <template #icon>
      <infoicon class="itemIcon info" />
    </template>
    <template #heading>Facts</template>
    One aspect of my job that I particularly enjoy is web design. I find the process of designing visually appealing and functional websites to be both creatively fulfilling and intellectually challenging.
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
    <div style="display: flex">
<span style="margin-right: 3%"> Repository
  </span>
      <a href="https://github.com/Tzyber?tab=repositories" target="_blank">
      <img  src="/github-mark-white.svg" alt="My Repository" width="30" height="30">
      </a>
    </div>
  </WelcomeItem>
  <WelcomeItem class="item6">
    <template #icon>
      <CurrentStatusIcon class="itemIcon status"/>
    </template>
    <template #heading>Current Status</template>
    <img src="https://api.netlify.com/api/v1/badges/59188988-3dcc-4be9-82e1-3f47cea36363/deploy-status" alt="currentStatus" width="150" height="30">
  </WelcomeItem>
</template>

<style scoped lang="scss">
.invisButton{
  background: transparent; border: none !important;
}

.itemIcon:hover{
  transform: scale(1.2);
}
.itemIcon{
  color: var(--color-text);
}

.item1 {
  animation: item1 2s;
}
@keyframes item1 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.item2 {
  animation: item2 4s;
}
@keyframes item2 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.item3 {
  animation: item3 6s;
}
@keyframes item3 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.item4 {
  animation: item4 8s;
}
@keyframes item4 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.item5 {
  animation: item5 10s;
}
@keyframes item5 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.item6 {
  animation: item6 10s;
}
@keyframes item6 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.big_Heart{
  animation: bigHeart 2s;
}
@keyframes bigHeart {
  0% { transform: scale(1.0); }
  50% { transform: scale(2.5); color: red }
  100% { transform: scale(1.0); }
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
  0% {transform: rotate(0deg);}

  100% {transform: rotate(360deg);}
}
</style>