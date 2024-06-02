<template>
  <MainLayout>
    <div class="md:grid grid-cols-3 box-border p-8 gap-8 flex flex-col">
      <div class="col-span-2 overflow-x-hidden">
        <div class="flex w-full bg-[--bg-color] mb-4 box-border p-4">
          <NuxtImg
            v-if="movieLoading && data"
            :src="url + data?.poster_path"
            class="w-1/3 min-w-52"
          />
          <div v-else class="w-1/3">
            <USkeleton class="w-full aspect-[9/14]" />
          </div>
          <div v-if="movieLoading && data" class="box-border px-4 w-2/3">
            <div>
              <h1 class="text-3xl font-bold text-orange-400 leading-10">
                {{ data?.title }}
              </h1>
              <p class="text-base text-gray-400">
                {{ data?.original_title }} (2024)
              </p>
            </div>

            <div
              class="bg-zinc-500 rounded box-border overflow-y-auto p-2 w-full my-6 h-40"
            >
              <ul>
                <li>
                  <strong>Trạng thái:</strong>
                  <span
                    class="py-0.5 px-3 bg-gray-400 rounded-full ml-2 font-semibold"
                    >{{ data?.status }}</span
                  >
                </li>
                <li class="truncate">
                  <strong>Thể loại:</strong>
                  <span v-for="genre in data?.genres" class="ml-2">{{
                    genre.name
                  }}</span>
                </li>
                <li><strong>Thời lương:</strong> {{ data?.runtime }} phút</li>
                <li>
                  <strong>Quốc gia:</strong>
                  <span v-for="el in data?.origin_country" class="ml-2">{{
                    el
                  }}</span>
                </li>
                <li>
                  <strong>Ngày khởi chiếu:</strong> {{ data?.release_date }}
                </li>
              </ul>
            </div>

            <div>
              <button
                class="h-12 w-28 text-lg text-white rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 mr-4"
              >
                Trailer
              </button>
              <button
                @click="
                  navigateTo(`/watch`);
                  $generalStore.movie = data;
                "
                class="h-12 w-28 text-lg text-white rounded-lg font-semibold bg-red-500 hover:bg-red-600 mr-4"
              >
                Xem phim
              </button>
            </div>
          </div>
          <div v-else class="box-border px-4 w-2/3">
            <USkeleton class="w-full h-10 rounded-full mb-2" />
            <USkeleton class="w-2/3 h-5 rounded-full mb-2" />
            <USkeleton class="w-full aspect-[1/0.5]" />
          </div>
        </div>

        <div
          v-if="movieLoading && data"
          class="box-border p-4 mb-4 bg-[--bg-color]"
        >
          <h1 class="text-white uppercase mb-2">Nội dung phim</h1>
          <h1 class="text-white mb-2">{{ data?.original_title }}</h1>
          <p class="text-gray-400 mb-2">{{ data?.overview }}</p>

          <NuxtImg :src="url + data?.backdrop_path" class="my-8" />
        </div>

        <div v-else class="box-border p-4 rounded bg-[--bg-color]">
          <USkeleton class="w-2/5 h-4 mb-2" />
          <USkeleton class="w-1/5 h-4 mb-2" />
          <USkeleton class="w-full aspect-[1/0.5]" />
        </div>

        <div class="box-border p-4 rounded bg-[--bg-color]">
          <CarouselTrending />
        </div>
        <!-- <pre class="text-blue-500">{{ data }}</pre> -->
      </div>

      <div
        class="col-span-1 flex flex-col sm:flex-row justify-between md:block overflow-x-hidden"
      >
        <div>
          <div
            class="flex items-center border-l-4 p-2 mb-6 border-l-blue-400 text-white font-semibold text-lg bg-black"
          >
            Phim sắp chiếu
          </div>

          <div class="flex flex-col w-full">
            <div
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
                    class="text-sm text-white font-semibold truncate text-wrap cursor-pointer"
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

const route = useRoute();
let data = ref();
let movieLoading = ref(false);

onMounted(async () => {
  try {
    movieLoading.value = false;
    let id = route.params.id;
    let { data: res } = await useFetch(`/api/movies/${id}`);
    data.value = res.value;
  } catch (error) {
    console.log(error);
  } finally {
    movieLoading.value = true;
  }
});
</script>

<style></style>
