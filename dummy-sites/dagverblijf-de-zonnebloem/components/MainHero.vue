<template>
  <section
    class="bg-amber-50 flex flex-col gap-x-30 md:flex-row-reverse items-center md:items-center py-20 px-6 md:px-30"
  >
    <!-- Afbeelding (rechts op desktop, boven op mobiel) -->
    <div class="w-full md:w-auto flex justify-center">
      <!-- eslint-disable-next-line -->
      <img
        class="object-cover rounded-xl w-full max-w-[400px] h-auto aspect-square"
        src="public/sunflower.webp"
        alt="Kinderopvang afbeelding"
      />
    </div>

    <!-- Tekstgedeelte (gecentreerd) -->
    <div
      class="flex-1 mt-10 md:mt-0 text-amber-950 flex flex-col gap-4 text-center md:text-left"
    >
      <div>
        <span class="uppercase text-amber-700 font-bold text-sm">
          {{ pretitle }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mt-1">{{ title }}</h1>
      </div>
      <p class="text-base md:text-lg">
        {{ description }}
      </p>
      <div
        class="flex flex-col md:flex-row gap-4 mt-3 text-amber-50 font-semibold"
      >
        <button
          class="bg-amber-700 hover:bg-amber-600 py-3 px-5 rounded-lg w-full md:w-auto hover:cursor-pointer"
        >
          {{ buttons.first }}
        </button>
        <button
          class="bg-amber-700 hover:bg-amber-600 py-3 px-5 rounded-lg w-full md:w-auto hover:cursor-pointer"
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
