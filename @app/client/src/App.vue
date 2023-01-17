<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { MyBrandButton, MyBrandInput } from '@demo/ui-lib';

import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <MyBrandButton>test button</MyBrandButton>
  <MyBrandInput />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
