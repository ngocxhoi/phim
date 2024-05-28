import { useApiAuth } from "~/composables/useApiAuth.js";

export const useMoviesStore = defineStore("moviesStore", {
  state: () => ({
    nowPlaying: null,
    popular: null,
    top_rated: null,
    upcoming: null,

    trending_all: null,
    trending_tv: null,

    total_popular: null,
    total_trending_tv: null,

    page: null,
  }),
  actions: {
    limitedData(arr, length) {
      return arr.splice(0, length);
    },

    async getMoviesList(path, type) {
      let res = await useApiAuth(path);
      console.log(res);
      if (type == "trending_all")
        this.trending_all = this.limitedData(res.data.value.results, 10);
      if (type == "trending_tv") {
        this.trending_tv = this.limitedData(res.data.value.results, 20);
        this.total_trending_tv = res.data.value.total_results;
      }
      if (type == "popular") {
        this.popular = this.limitedData(res.data.value.results, 20);
        this.total_popular = res.data.value.total_results;
      }
      if (type == "top_rated")
        this.top_rated = this.limitedData(res.data.value.results, 5);
      if (type == "upcoming")
        this.upcoming = this.limitedData(res.data.value.results, 5);
      this.total_results = res.data.value.total_results;
      this.page = res.data.value.page;
      return res;
    },

    async getMovieDetails(path, opt) {
      return await useApiAuth(path, opt);
    },
  },
  persist: true,
});
