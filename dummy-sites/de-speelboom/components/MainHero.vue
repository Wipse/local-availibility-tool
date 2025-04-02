<template>
  <section
    class="relative bg-[url('/tree.png')] flex flex-col md:flex-row-reverse items-center md:items-center py-20 md:py-40 px-6 md:px-30 bg-cover bg-center bg-no-repeat"
  >
    <div class="absolute inset-0 bg-emerald-950/60" />
    <div
      class="relative flex-1 mt-10 md:mt-0 text-emerald-50 flex flex-col gap-4 text-center md:text-left"
    >
      <div>
        <span class="uppercase text-emerald-300 font-bold text-sm">
          {{ pretitle }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mt-1">{{ title }}</h1>
      </div>
      <p class="text-base md:text-lg">
        {{ description }}
      </p>
      <div
        class="flex flex-col md:flex-row gap-4 mt-3 text-emerald-50 font-semibold"
      >
        <button
          class="bg-emerald-700 hover:bg-emerald-600 py-3 px-5 rounded-lg w-full md:w-auto hover:cursor-pointer"
        >
          {{ buttons.first }}
        </button>
        <button
          class="bg-emerald-700 hover:bg-emerald-600 py-3 px-5 rounded-lg w-full md:w-auto hover:cursor-pointer"
        >
          {{ buttons.second }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface IProps {
  pretitle: string;
  title: string;
  description: string;
  buttons: Buttons;
}

interface Buttons {
  first: string;
  second: string;
}

defineProps<IProps>();
</script>
