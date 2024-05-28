import { useMoviesStore } from "~/stores/movies.js";
import { useGeneralStore } from "~/stores/general.js";

export default defineNuxtPlugin(async (NuxtApp) => {
  return {
    provide: {
      moviesStore: useMoviesStore(),
      generalStore: useGeneralStore(),
    },
  };
});
