<template>
  <div class="flex items-center mb-2">
    <div class="h-6 max-h-full w-1 bg-orange-400 mr-1" />
    <h3 class="text-xl text-orange-400 font-semibold">Phim đề cử</h3>
  </div>
  <UCarousel
    v-slot="{ item }"
    :items="$moviesStore.trending_all"
    :ui="{ item: 'basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5' }"
    arrows
  >
    <div class="relative overflow-hidden group">
      <NuxtImg
        loading="lazy"
        :src="url + item.poster_path"
        draggable="false"
        class="w-full"
      />
      <div
        class="absolute inset-0 bg-black/30 cursor-pointer flex items-center justify-center scale-125 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <Icon name="mdi:play-circle-outline" size="40" class="text-white" />
      </div>
    </div>
  </UCarousel>
</template>

<script setup>
const { $moviesStore } = useNuxtApp();
const url = "https://image.tmdb.org/t/p/original";
</script>
