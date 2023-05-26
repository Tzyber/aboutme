<script setup>

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="line-1 anim-typewriter" >
      Web Designer and Web Developer
    </h3>
  </div>
</template>

<style scoped>


.line-1{
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;

  font-size: 1.2rem;
  width: 0;
}

/* Animation */
.anim-typewriter{
  animation: typewriter 3s steps(60) 1s 1 normal both,
  blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width:100%;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
