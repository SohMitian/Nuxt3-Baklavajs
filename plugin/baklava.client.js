import { createApp } from "vue";
import App from "./App.vue";

import "@baklavajs/themes/dist/syrup-dark.css";

createApp(App).mount("#app");


// import { defineNuxtPlugin } from '#app'
// import BaklavaVuePlugin from '@baklavajs/plugin-renderer-vue3'
// import '@baklavajs/plugin-renderer-vue3/dist/styles.css'

// export default defineNuxtPlugin((nuxtApp) => {
//   // nuxtApp.app.use(BaklavaVuePlugin)
//   nuxtApp.vueApp.component('baklava', BaklavaVuePlugin)
// })