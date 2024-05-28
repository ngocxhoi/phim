export const useGeneralStore = defineStore("general", {
  state: () => ({
    isLoginOpen: false,
    isEditProfileOpen: false,
    selectedPost: null,
    ids: null,
    isBackUrl: "/",
    movie: null,
  }),
  actions: {},
  getters: {},
  persist: true,
});
