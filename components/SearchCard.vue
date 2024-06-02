<template>
  <div
    class="w-full min-h-12 border flex cursor-pointer"
    @click="navigateTo(`/details/${movie?.id}`)"
  >
    <UPopover
      mode="hover"
      :popper="{ arrow: true, placement: 'left-start' }"
      class="w-1/2"
    >
      <img
        :src="imgUrl"
        @click="navigateTo(`/details/${movie?.id}`)"
        alt="Movie Poster"
        class="h-auto"
      />
      <template #panel>
        <div class="text-sm max-w-80 text-wrap px-4 pt-2">
          {{ movie?.title }}
        </div>
        <div class="p-4 max-w-80 h-40 text-wrap truncate text-xs">
          {{ movie?.overview }}
        </div>
      </template>
    </UPopover>
    <div class="w-1/2" @click="navigateTo(`/details/${movie?.id}`)">
      <div class="text-sm ml-1 truncate text-wrap">{{ movie?.title }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { Movie } from "~/types/Movie";

const emits = defineEmits(["movieChose"]);
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
