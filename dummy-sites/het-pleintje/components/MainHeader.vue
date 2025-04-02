<template>
  <header class="bg-sky-100 w-full py-6 border-b-sky-700 border-[1px]">
    <div class="mx-10 md:mx-10 flex justify-between items-center">
      <!-- Logo -->
      <p class="text-sky-700 text-xl uppercase font-bold">Het Pleintje</p>

      <!-- Navigatie - Desktop -->
      <nav class="hidden md:flex flex-row gap-x-8 text-sky-700 font-semibold">
        <button class="px-2 hover:underline hover:text-sky-950">
          Beschikbaarheid
        </button>
        <button class="px-2 hover:underline hover:text-sky-950">
          Aanmelden
        </button>
        <button class="px-2 hover:underline hover:text-sky-950">
          Over Ons
        </button>
      </nav>

      <!-- Hamburgermenu - Mobiel -->
      <button
        class="md:hidden text-sky-700 text-2xl hover:cursor-pointer"
        @click="toggleMenu"
      >
        ☰
      </button>
    </div>

    <!-- Uitklapbare navigatie voor mobiel -->
    <nav
      v-if="menuOpen"
      class="flex flex-col gap-4 mt-4 p-4 text-sky-700 font-semibold md:hidden"
    >
      <button
        class="bg-sky-200 rounded-xl px-6 py-3 hover:bg-sky-300 hover:cursor-pointer hover:text-sky-800"
      >
        Beschikbaarheid
      </button>
      <button
        class="bg-sky-200 rounded-xl px-6 py-3 hover:bg-sky-300 hover:cursor-pointer hover:text-sky-800"
      >
        Aanmelden
      </button>
      <button
        class="bg-sky-200 rounded-xl px-6 py-3 hover:bg-sky-300 hover:cursor-pointer hover:text-sky-800"
      >
        Over Ons
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
