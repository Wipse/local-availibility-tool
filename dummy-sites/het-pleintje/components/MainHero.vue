<template>
  <section class="bg-sky-50 grid grid-cols-12 gap-x-10 py-20">
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <img
      class="object-cover col-start-2 col-span-3 rounded-xl w-full max-w-[400px] h-96"
      src="public/left.png"
      alt="Kinderopvang afbeelding"
    />
    <div
      class="flex-1 mt-10 col-span-4 md:mt-0 text-sky-950 flex flex-col gap-4 text-center md:text-left"
    >
      <div class="text-center">
        <span class="uppercase text-sky-700 font-bold text-sm">
          {{ pretitle }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mt-1">{{ title }}</h1>
      </div>
      <p class="text-base text-center md:text-lg">
        {{ description }}
      </p>
      <div
        class="flex justify-center flex-col md:flex-row gap-4 mt-3 text-sky-50 font-semibold"
      >
        <button
          class="bg-sky-700 hover:bg-sky-600 py-3 px-5 rounded-lg w-full md:w-auto hover:cursor-pointer"
        >
          {{ buttons.first }}
        </button>
        <button
          class="bg-sky-700 hover:bg-sky-600 py-3 px-5 rounded-lg w-full md:w-auto hover:cursor-pointer"
        >
          {{ buttons.second }}
        </button>
      </div>
    </div>
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <img
      class="object-cover col-span-3 rounded-xl w-full max-w-[400px] h-96"
      src="../public/rechts.png"
      alt="Kinderopvang afbeelding"
    />
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
