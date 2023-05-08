<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { MyBrandButton, MyBrandInput } from '@mihailtd/ui-lib';

import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <HelloWorld msg="Vite + Vue + K8S" />
  <div class="mt-12 flex flex-col px-12">
    <h2 class="mb-4 text-xl">Custom Components From UI Library:</h2>
    <MyBrandButton class="w-48">test button</MyBrandButton>
    <MyBrandInput class="mt-6 w-64" />
  </div>
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
