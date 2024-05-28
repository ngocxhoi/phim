<template>
  <USlideover v-model="showSlideOver" prevent-close>
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Danh mục
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="emits('closeSlideOver')"
          />
        </div>
      </template>

      <ul class="flex flex-col h-full items-start text-gray-300 font-semibold">
        <!-- <li class="hover:text-blue-400 cursor-pointer text-nowrap mb-4">
          <p>Đang hót</p>
        </li>
        <li class="hover:text-blue-400 cursor-pointer text-nowrap mb-4">
          <p>Phim Netflix</p>
        </li> -->
        <UAccordion :items="items">
          <template #default="{ item, index, open }">
            <UButton
              color="gray"
              variant="ghost"
              class="border-b border-gray-200 dark:border-gray-700"
              :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
            >
              <template #leading>
                <UIcon
                  :name="item.icon"
                  class="size-5"
                  :class="[open && 'text-blue-400']"
                />
              </template>

              <span
                class="truncate hover:text-blue-400 text-base"
                :class="[open && 'text-blue-400']"
                >{{ item.label }}</span
              >

              <template #trailing>
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"
                />
              </template>
            </UButton>
          </template>

          <template #item="{ item }">
            <div>
              <ul class="flex flex-col ml-10">
                <li
                  v-for="el in item.list"
                  class="mb-1 hover:text-blue-400 cursor-pointer"
                >
                  {{ el.label }}
                </li>
              </ul>
            </div>
          </template>
        </UAccordion>
      </ul>
    </UCard>
  </USlideover>
</template>

<script lang="ts" setup>
const props = defineProps(["showSlideOver"]);
const { showSlideOver } = toRefs(props);
const emits = defineEmits(["closeSlideOver"]);

const items = [
  {
    label: "Đang hót",
    icon: "i-heroicons-camera",
  },
  {
    label: "Phim Netflix",
    icon: "i-heroicons-camera",
  },
  {
    label: "Phim bộ",
    icon: "i-heroicons-camera",
    list: [
      {
        label: "Phim Âu Mỹ",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Hàn Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Trung Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Thái Lan",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Việt Nam",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Nhật Bản",
        icon: "i-heroicons-chevron-right",
      },
    ],
  },
  {
    label: "Anime",
    icon: "i-heroicons-camera",
    list: [
      {
        label: "Phim Âu Mỹ",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Hàn Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Trung Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Thái Lan",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Việt Nam",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Nhật Bản",
        icon: "i-heroicons-chevron-right",
      },
    ],
  },
  {
    label: "Phim lẻ",
    icon: "i-heroicons-camera",
    list: [
      {
        label: "Phim Âu Mỹ",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Hàn Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Trung Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Thái Lan",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Việt Nam",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Nhật Bản",
        icon: "i-heroicons-chevron-right",
      },
    ],
  },
  {
    label: "TV Show",
    icon: "i-heroicons-camera",
    list: [
      {
        label: "Phim Âu Mỹ",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Hàn Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Trung Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Thái Lan",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Việt Nam",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Nhật Bản",
        icon: "i-heroicons-chevron-right",
      },
    ],
  },
  {
    label: "Thể loại",
    icon: "i-heroicons-camera",
    list: [
      {
        label: "Phim Âu Mỹ",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Hàn Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Trung Quốc",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Thái Lan",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Việt Nam",
        icon: "i-heroicons-chevron-right",
      },
      {
        label: "Phim Nhật Bản",
        icon: "i-heroicons-chevron-right",
      },
    ],
  },
];
</script>
