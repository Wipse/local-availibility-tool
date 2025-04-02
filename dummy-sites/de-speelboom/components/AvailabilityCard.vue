<template>
  <article
    class="shadow hover:shadow-2xl transition-all hover:cursor-pointer rounded-xl"
  >
    <h3
      class="text-center font-semibold text-lg rounded-t-xl text-white bg-emerald-700 py-2"
    >
      {{ title }}
    </h3>
    <div class="px-6 pt-1.5 pb-6 flex flex-col gap-y-3">
      <span class="text-center"> {{ categoryIcon + " " + category }} </span>
      <p class="text-center line-clamp-4">
        {{ description }}
      </p>
      <div
        v-if="slots !== 0"
        class="flex mt-2 gap-x-2 justify-center items-center"
      >
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
      <div
        v-else
        class="px-4 py-1 flex rounded-lg w-auto mx-auto text-center text-white bg-red-400"
      >
        Geen slots beschikbaar...
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface IProps {
  categoryIcon?: string;
  category?: string;
  title: string;
  description: string;
  slots: number;
}

withDefaults(defineProps<IProps>(), {
  categoryIcon: "🖌️",
  category: "Creativiteit",
});
</script>
