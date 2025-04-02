<template>
  <header class="bg-emerald-700 w-full py-6 border-b-emerald-700 border-[1px]">
    <div class="mx-10 md:mx-10 flex justify-between items-center">
      <!-- Logo -->
      <p class="text-white text-xl uppercase font-bold">De Speelboom 🌳</p>

      <!-- Navigatie - Desktop -->
      <nav class="hidden md:flex flex-row gap-x-8 text-white font-semibold">
        <button
          class="px-2 hover:underline hover:cursor-pointer hover:text-emerald-200"
        >
          Beschikbaarheid
        </button>
        <button
          class="px-2 hover:underline hover:cursor-pointer hover:text-emerald-200"
        >
          Aanmelden
        </button>
        <button
          class="px-2 hover:underline hover:cursor-pointer hover:text-emerald-200"
        >
          Over Ons
        </button>
      </nav>

      <!-- Hamburgermenu - Mobiel -->
      <button
        class="md:hidden text-white text-2xl hover:cursor-pointer"
        @click="toggleMenu"
      >
        ☰
      </button>
    </div>

    <!-- Uitklapbare navigatie voor mobiel -->
    <nav
      v-if="menuOpen"
      class="flex flex-col gap-4 mt-4 p-4 text-white font-semibold md:hidden"
    >
      <button
        class="bg-emerald-200 rounded-xl px-6 py-3 hover:bg-emerald-300 hover:cursor-pointer hover:text-emerald-800"
      >
        Beschikbaarheid
      </button>
      <button
        class="bg-emerald-200 rounded-xl px-6 py-3 hover:bg-emerald-300 hover:cursor-pointer hover:text-emerald-800"
      >
        Aanmelden
      </button>
      <button
        class="bg-emerald-200 rounded-xl px-6 py-3 hover:bg-emerald-300 hover:cursor-pointer hover:text-emerald-800"
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
