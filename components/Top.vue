<template>
  <div
    class="h-20 w-full box-border md:px-20 px-0 flex items-center justify-between bg-[--main-color]"
  >
    <div class="md:hidden">
      <Icon
        name="mdi:format-list-bulleted"
        size="30"
        @click="showSlideOver = true"
        class="cursor-pointer"
      />
      <SlideOver
        :show-slide-over="showSlideOver"
        @close-slide-over="showSlideOver = false"
      />
    </div>

    <div class="hidden md:flex">
      <Logo class="md:mr-8" />
      <ul class="items-center text-gray-300 font-semibold md:flex hidden">
        <li
          class="mr-6 hover:text-blue-400 cursor-pointer text-nowrap lg:block hidden"
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

    <div>
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="lg"
        color="white"
        :trailing="false"
        placeholder="Search..."
        :ui="{ rounded: 'rounded-full' }"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style></style>
