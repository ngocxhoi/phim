<template>
  <div class="w-64 h-[32rem] border flex flex-col text-center">
    <div
      @click="navigateTo(`/details/${movie?.id}`)"
      class="mb-5 bg-green-600 inline-block"
    >
      <img
        :src="imgUrl"
        alt="Movie Poster"
        class="transform hover:translate-x-3 hover:-translate-y-3 delay-75 duration-500 inline-block"
      />
    </div>
    <div class="text-lg">{{ movie?.title }}</div>
    <div
      class="text-sm text-gray-500 break-words text-wrap truncate overflow-hidden"
    >
      {{ movie?.overview }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { Movie } from "~/types/Movie";

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
  },
});

const { movie } = toRefs(props);

const config = useRuntimeConfig();
const imgUrl = computed(() =>
  movie?.value?.poster_path != null
    ? `${config.public.imgBaseUrl}/${movie.value.poster_path}`
    : "https://via.placeholder.com/300x500"
);
</script>
