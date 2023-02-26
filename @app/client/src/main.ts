import './style.css';

import { createApp } from 'vue';

import App from './App.vue';

// Alternatively I could import the entire library using this plugin
// import UiLibPlugin from './UiLibPlugin';

createApp(App)
  // .use(UiLibPlugin)
  .mount('#app');
