<template>
  <MainLayout>
    <div class="w-full min-h-screen bg-[--bg-color] overflow-hidden">
      <div
        class="w-full aspect-[16/9] bg-gray-800 mb-4 flex items-center justify-center"
      >
        <Icon
          name="mdi:play-circle-outline"
          size="100"
          class="text-gray-500 cursor-pointer"
        />
      </div>
      <div>
        <h1 class="text-2xl font-semibold text-orange-400 leading-10">
          {{ movie.title }}
        </h1>
        <p class="text-base text-gray-400 my-1">
          {{ movie.original_title }} (2024)
        </p>
        <div class="bg-gray-800 text-gray-400 box-border p-2">
          {{ movie.overview }}
        </div>
      </div>
      <!-- <pre class="text-red-500">{{ movie }}</pre> -->
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const { $generalStore } = useNuxtApp();
const { movie } = storeToRefs($generalStore);
</script>
