<template>
  <MainLayout>
    <div
      class="md:grid grid-cols-3 box-border p-8 gap-8 flex flex-col"
      :class="[!pageLoaded && 'w-[90vw]']"
    >
      <div class="col-span-2">
        <UCarousel
          v-if="pageLoaded"
          ref="carouselRef"
          v-slot="{ item }"
          :items="$moviesStore.trending_all"
          indicators
          class="w-full"
          :ui="{ item: 'basis-full' }"
        >
          <div class="relative">
            <NuxtImg
              loading="lazy"
              :src="url + item.backdrop_path"
              class="w-full"
              draggable="false"
            />
            <div class="absolute bottom-4 left-4">
              <h2
                @click="navigateTo(`/details/${item.id}`)"
                class="text-white text-xl font-semibold hover:text-2xl transition-all cursor-pointer"
              >
                {{ item.title }}
              </h2>
              <p class="text-gray-300">{{ item.original_title }}</p>
            </div>
          </div>
        </UCarousel>
        <div v-else>
          <USkeleton class="w-full aspect-[16/9]" />
        </div>

        <div class="mt-10">
          <div
            class="flex items-center justify-between border-l-4 p-3 mb-8 border-l-blue-400 bg-black"
          >
            <p class="text-white font-semibold text-xl">Phim phổ biến</p>
            <p class="text-gray-400 flex items-center text-xs">
              {{ $moviesStore.total_popular }}
              <span
                class="bg-blue-400 rounded p-1 ml-2 text-white cursor-pointer"
                >All</span
              >
            </p>
          </div>

          <div
            class="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-x-4 gap-y-8"
          >
            <div
              v-if="pageLoaded"
              v-for="item in $moviesStore.popular"
              :key="item"
              @click="navigateTo('/details/' + item.id)"
            >
              <div class="w-full overflow-hidden relative group cursor-pointer">
                <NuxtImg
                  loading="lazy"
                  :src="url + item.poster_path"
                  alt=""
                  class="cursor-pointer mx-auto group-hover:scale-125 transition-all"
                />
                <div
                  class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-100 transition-all"
                >
                  <Icon
                    name="mdi:play-circle-outline"
                    size="60"
                    color="#ffd9d9"
                  />
                </div>
              </div>
              <p
                class="text-white font-semibold truncate mt-2 hover:text-blue-500 cursor-pointer"
              >
                {{ item.title }}
              </p>
            </div>

            <div v-for="e in 5" v-else>
              <USkeleton class="aspect-[9/14]" />
              <USkeleton class="w-2/3 h-2 my-2" />
              <USkeleton class="w-1/2 h-2 my-2" />
            </div>
          </div>
        </div>

        <div class="mt-10">
          <div
            class="flex items-center justify-between border-l-4 p-3 mb-8 border-l-blue-400 bg-black"
          >
            <p class="text-white font-semibold text-xl">TV Series phổ biến</p>
            <p class="text-gray-400 flex items-center text-xs">
              {{ $moviesStore.total_trending_tv }}
              <span
                class="bg-blue-400 rounded p-1 ml-2 text-white cursor-pointer"
                >All</span
              >
            </p>
          </div>

          <div
            class="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-x-4 gap-y-8"
          >
            <div
              v-if="pageLoaded"
              v-for="item in $moviesStore.trending_tv"
              :key="item"
              @click="navigateTo('/details/' + item.id)"
            >
              <div class="w-full overflow-hidden relative group cursor-pointer">
                <NuxtImg
                  loading="lazy"
                  :src="url + item.poster_path"
                  alt=""
                  class="cursor-pointer mx-auto group-hover:scale-125 transition-all"
                />
                <div
                  class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-100 transition-all"
                >
                  <Icon
                    name="mdi:play-circle-outline"
                    size="60"
                    color="#ffd9d9"
                  />
                </div>
              </div>
              <p
                class="text-white font-semibold truncate mt-2 hover:text-blue-500 cursor-pointer"
              >
                {{ item.original_name }}
              </p>
            </div>

            <div v-for="e in 5" v-else>
              <USkeleton class="aspect-[9/14]" />
              <USkeleton class="w-2/3 h-2 my-2" />
              <USkeleton class="w-1/2 h-2 my-2" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 flex flex-col sm:flex-row justify-between md:block"
      >
        <div>
          <div
            class="flex items-center border-l-4 p-2 mb-6 border-l-blue-400 text-white font-semibold text-lg bg-black"
          >
            Phim sắp chiếu
          </div>
          <div class="flex flex-col w-full">
            <div
              v-if="pageLoaded"
              v-for="item in $moviesStore.upcoming"
              class="w-full flex mb-6 border-b-[0.5px] border-b-gray-200/70"
            >
              <NuxtImg
                @click="navigateTo('/details/' + item.id)"
                loading="lazy"
                :src="url + item.poster_path"
                width="100"
                alt=""
              />
              <div class="flex flex-col items-start justify-evenly">
                <div class="ml-4">
                  <p
                    @click="navigateTo('/details/' + item.id)"
                    class="text-sm text-white font-semibold truncate cursor-pointer"
                  >
                    {{ item.original_title }}
                  </p>
                  <span class="text-xs text-gray-400 italic"
                    >Ngày khời chiếu: {{ item.release_date }}</span
                  >
                </div>

                <div
                  class="w-full ml-4 flex lg:items-center items-start lg:flex-row flex-col"
                >
                  <div
                    class="flex items-center justify-start text-sm w-fit px-2 py-1 rounded-lg border border-gray-600 text-gray-400"
                  >
                    <Icon name="mdi:star" color="yellow" class="mr-1" />
                    {{ item.vote_average }}
                  </div>
                  <div class="text-gray-400 text-sm lg:ml-4 rounded-xl">
                    Original language:
                    <span class="uppercase">{{ item.original_language }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-for="e in 2" v-else class="flex mb-2">
              <USkeleton class="w-1/3 aspect-[9/14]" />
              <div class="flex flex-col justify-evenly w-1/2 box-border pl-2">
                <div>
                  <USkeleton class="w-full h-2 my-2" />
                  <USkeleton class="w-1/2 h-2 my-2" />
                </div>
                <USkeleton class="w-full h-2" />
                <div class="flex items-center">
                  <USkeleton class="size-10 rounded-full my-2" />
                  <USkeleton class="w-1/2 h-2 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:mt-6">
          <div
            class="flex items-center border-l-4 p-2 mb-6 border-l-blue-400 text-white font-semibold text-lg bg-black"
          >
            Phim đang hot
          </div>

          <div class="flex flex-col w-full">
            <div
              v-if="pageLoaded"
              v-for="item in $moviesStore.top_rated"
              class="w-full flex mb-6 border-b-[0.5px] border-b-gray-200/70"
            >
              <NuxtImg
                @click="navigateTo('/details/' + item.id)"
                loading="lazy"
                :src="url + item.poster_path"
                width="100"
                alt=""
              />
              <div class="flex flex-col items-start justify-evenly">
                <div class="ml-4">
                  <p
                    @click="navigateTo('/details/' + item.id)"
                    class="text-sm text-white font-semibold truncate cursor-pointer"
                  >
                    {{ item.original_title }}
                  </p>
                  <span class="text-xs text-gray-400 italic"
                    >Ngày khời chiếu: {{ item.release_date }}</span
                  >
                </div>

                <div
                  class="w-full ml-4 flex lg:items-center items-start lg:flex-row flex-col"
                >
                  <div
                    class="flex items-center justify-start text-sm w-fit px-2 py-1 rounded-lg border border-gray-600 text-gray-400"
                  >
                    <Icon name="mdi:star" color="yellow" class="mr-1" />
                    {{ item.vote_average }}
                  </div>
                  <div class="text-gray-400 text-sm lg:ml-4 rounded-xl">
                    Original language:
                    <span class="uppercase">{{ item.original_language }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-for="e in 2" v-else class="flex mb-2">
              <USkeleton class="w-1/3 aspect-[9/14]" />
              <div class="flex flex-col justify-evenly w-1/2 box-border pl-2">
                <div>
                  <USkeleton class="w-full h-2 my-2" />
                  <USkeleton class="w-1/2 h-2 my-2" />
                </div>
                <USkeleton class="w-full h-2" />
                <div class="flex items-center">
                  <USkeleton class="size-10 rounded-full my-2" />
                  <USkeleton class="w-1/2 h-2 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const { $generalStore, $moviesStore } = useNuxtApp();
const url = "https://image.tmdb.org/t/p/original";

let pageLoaded = ref(false);
const carouselRef = ref();

onMounted(async () => {
  try {
    pageLoaded.value = false;
    await $moviesStore.getMoviesList(
      "/trending/all/day?language=en-US",
      "trending_all"
    );
    await $moviesStore.getMoviesList(
      "/trending/tv/day?language=en-US",
      "trending_tv"
    );
    await $moviesStore.getMoviesList(
      "/movie/upcoming?language=en-US&page=1",
      "upcoming"
    );
    await $moviesStore.getMoviesList(
      "/movie/popular?language=en-US&page=1",
      "popular"
    );
    await $moviesStore.getMoviesList(
      "/movie/top_rated?language=en-US&page=1",
      "top_rated"
    );
  } catch (error) {
    console.log(error);
  } finally {
    pageLoaded.value = true;
  }

  // Enable this if you want to auto scroll
  // setInterval(() => {
  //   if (!carouselRef.value) return;

  //   if (carouselRef.value.page === carouselRef.value.pages) {
  //     return carouselRef.value.select(0);
  //   }

  //   carouselRef.value.next();
  // }, 10000);
});
</script>
