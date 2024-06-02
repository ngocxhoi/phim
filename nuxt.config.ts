// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "vue3-carousel-nuxt",
    "@nuxt/image",
  ],
  css: ["@/assets/css/variables.css"],

  runtimeConfig: {
    apiKey: process.env.API_KEY,
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      imgBaseUrl: process.env.IMG_BASE_URL,
    },
  },
});
