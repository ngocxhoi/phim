<template>
  <div
    class="h-20 w-full box-border md:px-20 px-8 flex items-center justify-between bg-[--main-color]"
  >
    <div class="md:hidden">
      <Icon
        name="mdi:format-list-bulleted"
        size="30"
        @click="showSlideOver = true"
        class="cursor-pointer text-white"
      />
      <SlideOver
        :show-slide-over="showSlideOver"
        @close-slide-over="showSlideOver = false"
      />
    </div>

    <div class="hidden md:flex">
      <div
        class="overflow-hidden h-full w-24 flex items-center justify-center md:mr-8"
      >
        <Logo />
      </div>
      <ul class="items-center text-gray-300 font-semibold md:flex hidden">
        <li
          class="mr-6 hover:text-blue-400 cursor-pointer text-nowrap xl:block hidden"
        >
          Đang hót
        </li>
        <li
          class="mr-6 hover:text-blue-400 cursor-pointer text-nowrap lg:block hidden"
        >
          Phim Netflix
        </li>
        <UDropdown
          :items="item1"
          mode="hover"
          :popper="{ placement: 'bottom-start' }"
          class="mr-6"
          :ui="{
            background: 'bg-black',
            ring: 'ring-0',
            item: {
              active: 'bg-black text-blue-400 -translate-y-0.5',
              inactive: 'text-gray-300',
              icon: {
                base: 'flex w-4 h-4',
                active: 'text-blue-400',
                inactive: 'text-gray-300',
              },
            },
          }"
        >
          <div class="hover:text-blue-400 flex items-center">
            <li class="hover:text-blue-400 cursor-pointer text-nowrap">
              Phim bộ
            </li>
            <Icon name="mdi:chevron-down" size="24" />
          </div>
        </UDropdown>
        <UDropdown
          :items="item2"
          mode="hover"
          :popper="{ placement: 'bottom-start' }"
          class="mr-6"
          :ui="{
            background: 'bg-black',
            ring: 'ring-0',
            item: {
              active: 'bg-black text-blue-400 -translate-y-0.5',
              inactive: 'text-gray-300',
              icon: {
                base: 'flex w-4 h-4',
                active: 'text-blue-400',
                inactive: 'text-gray-300',
              },
            },
          }"
        >
          <div class="hover:text-blue-400 flex items-center">
            <li class="hover:text-blue-400 cursor-pointer text-nowrap">
              Anime
            </li>
            <Icon name="mdi:chevron-down" size="24" />
          </div>
        </UDropdown>
        <UDropdown
          :items="item3"
          mode="hover"
          :popper="{ placement: 'bottom-start' }"
          class="mr-6"
          :ui="{
            background: 'bg-black',
            ring: 'ring-0',
            item: {
              active: 'bg-black text-blue-400 -translate-y-0.5',
              inactive: 'text-gray-300',
              icon: {
                base: 'flex w-4 h-4',
                active: 'text-blue-400',
                inactive: 'text-gray-300',
              },
            },
          }"
        >
          <div class="hover:text-blue-400 flex items-center">
            <li class="hover:text-blue-400 cursor-pointer text-nowrap">
              Phim lẻ
            </li>
            <Icon name="mdi:chevron-down" size="24" />
          </div>
        </UDropdown>
        <UDropdown
          :items="item4"
          mode="hover"
          :popper="{ placement: 'bottom-start' }"
          class="mr-6"
          :ui="{
            background: 'bg-black',
            ring: 'ring-0',
            item: {
              active: 'bg-black text-blue-400 -translate-y-0.5',
              inactive: 'text-gray-300',
              icon: {
                base: 'flex w-4 h-4',
                active: 'text-blue-400',
                inactive: 'text-gray-300',
              },
            },
          }"
        >
          <div class="hover:text-blue-400 flex items-center">
            <li class="hover:text-blue-400 cursor-pointer text-nowrap">
              TV Show
            </li>
            <Icon name="mdi:chevron-down" size="24" />
          </div>
        </UDropdown>
        <UDropdown
          :items="item5"
          mode="hover"
          :popper="{ placement: 'bottom-start' }"
          class="mr-6 hidden lg:block"
          :ui="{
            background: 'bg-black',
            ring: 'ring-0',
            item: {
              active: 'bg-black text-blue-400 -translate-y-0.5',
              inactive: 'text-gray-300',
              icon: {
                base: 'flex w-4 h-4',
                active: 'text-blue-400',
                inactive: 'text-gray-300',
              },
            },
          }"
        >
          <div class="hover:text-blue-400 flex items-center">
            <li class="hover:text-blue-400 cursor-pointer text-nowrap">
              Thể loại
            </li>
            <Icon name="mdi:chevron-down" size="24" />
          </div>
        </UDropdown>
        <li
          class="hover:text-blue-400 cursor-pointer text-nowrap xl:block hidden"
        >
          Tin tức
        </li>
      </ul>
    </div>

    <Logo class="block md:hidden" />

    <div class="relative">
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="false"
        placeholder="Search..."
        :ui="{ rounded: 'rounded-full' }"
        class="w-full md:block hidden"
        @input="debounceSearchTerm"
      />
      <div
        v-if="search && data"
        class="absolute z-10 right-0 mt-2 bg-[#7dab84] w-full min-w-60 min-h-40 max-h-96 rounded overflow-y-auto hidden md:block"
      >
        <div>
          <div v-for="movie in data?.results">
            <SearchCard @movie-chose="resetSearch()" :movie="movie" />
          </div>
        </div>
      </div>

      <div
        class="cursor-pointer p-1 rounded-full hover:bg-gray-400 md:hidden"
        @click="showMdSearch()"
      >
        <UIcon name="i-heroicons-magnifying-glass" class="text-white size-7" />
      </div>
    </div>

    <div class="hidden md:block">
      <Icon
        name="mdi:account-circle-outline"
        class="text-white cursor-pointer"
        size="30"
      />
    </div>
  </div>
  <div
    v-if="mdSearch"
    class="relative md:hidden w-full z-10 box-border px-8 bg-[--main-color]"
  >
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      size="sm"
      color="white"
      :trailing="false"
      placeholder="Search..."
      :ui="{ rounded: 'rounded-full' }"
      @input="debounceSearchTerm"
    />

    <div
      v-if="search && data"
      class="absolute right-8 mt-2 bg-[#7dab84] w-1/2 min-w-60 min-h-40 max-h-96 rounded overflow-y-auto"
    >
      <div>
        <div v-for="movie in data?.results">
          <SearchCard @movie-chose="resetSearch()" :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse } from "~/types/ApiResponse";

let showSlideOver = ref(false);
const item1 = [
  [
    {
      label: "Phim Âu Mỹ",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Hàn Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Trung Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Thái Lan",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Việt Nam",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Nhật Bản",
      icon: "i-heroicons-chevron-right",
    },
  ],
];
const item2 = [
  [
    {
      label: "Phim Âu Mỹ",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Hàn Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Trung Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Thái Lan",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Việt Nam",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Nhật Bản",
      icon: "i-heroicons-chevron-right",
    },
  ],
];
const item3 = [
  [
    {
      label: "Phim Âu Mỹ",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Hàn Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Trung Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Thái Lan",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Việt Nam",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Nhật Bản",
      icon: "i-heroicons-chevron-right",
    },
  ],
];
const item4 = [
  [
    {
      label: "Phim Âu Mỹ",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Hàn Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Trung Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Thái Lan",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Việt Nam",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Nhật Bản",
      icon: "i-heroicons-chevron-right",
    },
  ],
];
const item5 = [
  [
    {
      label: "Phim Âu Mỹ",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Hàn Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Trung Quốc",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Thái Lan",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Việt Nam",
      icon: "i-heroicons-chevron-right",
    },
  ],
  [
    {
      label: "Phim Nhật Bản",
      icon: "i-heroicons-chevron-right",
    },
  ],
];

const mdSearch = ref(false);
const search = ref("");
const debounceSearchTerm = useDebounce(handleInput, 700);

function handleInput(event: any) {
  search.value = event.target.value;
}

function showMdSearch() {
  mdSearch.value = !mdSearch.value;
  if (mdSearch.value == false) search.value = "";
}

const url = computed(() => `/api/movies/search?query=${search.value}&page=1`);
const { data } = await useFetch<ApiResponse>(url);

function resetSearch() {
  search.value = "";
}
</script>
