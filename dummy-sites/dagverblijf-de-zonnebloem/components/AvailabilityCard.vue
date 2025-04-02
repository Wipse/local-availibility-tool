<template>
  <article
    class="p-6 shadow hover:shadow-2xl flex flex-col gap-y-3 transition-all hover:cursor-pointer rounded-xl"
  >
    <div>
      <div class="flex gap-x-2 text-amber-950 text-xl font-bold">
        <span> {{ icon }} </span>
        <h3>{{ title }}</h3>
      </div>
      <time class="italic"> {{ time }} </time>
    </div>
    <p class="line-clamp-2">
      {{ description }}
    </p>
    <div v-if="slots !== 0" class="flex gap-x-2 items-center">
      <div class="relative w-4 h-4 flex items-center justify-center">
        <div class="size-3 z-10 bg-green-500 rounded-full" />
        <div
          class="absolute z-0 w-full h-full bg-green-200 rounded-full animate-ping"
        />
      </div>
      <span class="italic font-semibold">
        {{
          slots + slots === 1
            ? slots + " slot beschikbaar"
            : slots + " slots beschikbaar!"
        }}
      </span>
    </div>
    <div v-else class="px-6 py-1 rounded-lg w-fit text-white bg-red-400">
      Geen beschikbare plaatsen...
    </div>
  </article>
</template>

<script setup lang="ts">
interface IProps {
  icon: string;
  title: string;
  time: string;
  description: string;
  slots: number;
}

defineProps<IProps>();
</script>
