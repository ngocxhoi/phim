// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "vue3-carousel-nuxt",
    "@nuxt/image"
  ],
  css: ["@/assets/css/variables.css"],
});