<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input
        type="text"
        @input="debounceSearchTerm"
        placeholder="Iron Man..."
        class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-10 mb-10"
    >
      <div v-for="movie in data?.results">
        <MovieCard :movie="movie" />
      </div>
    </div>
    <div v-if="data?.results.length" class="flex justify-center">
      <button
        @click="page--"
        v-if="!disabledPrevious"
        class="px-4 py-2 text-sm border rounded-lg"
      >
        Previous
      </button>
      <div class="px-4 py-2 text-sm border rounded-lg">{{ page }}</div>
      <button
        @click="page++"
        v-if="!disabledNext"
        class="px-4 py-2 text-sm border rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDebounce } from "~/composables/useDebounce";
import type { ApiResponse } from "~/types/ApiResponse";

const searchTerm = ref("");
const page = ref(1);

const disabledPrevious = computed(() => {
  return page.value === 1;
});

const disabledNext = computed(() => {
  return page.value + 1 === data?.value?.total_pages;
});

const debounceSearchTerm = useDebounce(handleInput, 700);

function handleInput(event: any) {
  searchTerm.value = event.target.value;
}

const url = computed(
  () => `api/movies/search?query=${searchTerm.value}&page=${page.value}`
);
const { data } = await useFetch<ApiResponse>(url);
</script>
