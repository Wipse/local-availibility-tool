<template>
  <article
    class="border-b-violet-700 rounded-xl p-6 pt-14 border-b-[1px] transition-all"
  >
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold uppercase">
        {{ title }}
        <span class="text-violet-600 text-lg ml-1"> {{ organisation }} </span>
      </h2>
      <div
        :class="[
          'flex px-4 py-2 rounded-lg mt-2 gap-x-2 justify-center items-center',
          slots === 0 ? 'bg-red-50' : 'bg-green-50',
        ]"
      >
        <div
          v-if="slots > 0"
          class="relative w-4 h-4 flex items-center justify-center"
        >
          <div class="size-3 z-10 bg-green-500 rounded-full" />
          <div
            class="absolute z-0 w-full h-full bg-green-200 rounded-full animate-ping"
          />
        </div>
        <div v-else>❌</div>
        <span class="italic font-semibold">
          {{
            (slots === 0 ? "0" : slots) + " " + (slots === 1 ? "slot" : "slots")
          }}
          beschikbaar
        </span>
      </div>
    </div>
    <div
      :class="['md:-mt-2', time === 'Geen tijd vermeld' ? 'opacity-30' : '']"
    >
      <p>{{ "🕙 " + time }}</p>
    </div>
    <p :class="category === 'Geen categorie' ? 'opacity-30' : ''">
      {{ categoryIcon + " " + category }}
    </p>
    <p class="mt-4 line-clamp-3">
      {{ description }}
    </p>
    <button
      class="px-4 py-3 bg-violet-600 text-white mt-2 rounded-2xl hover:underline hover:bg-violet-500 hover:cursor-pointer ml-auto block"
    >
      Naar Website
    </button>
  </article>
</template>

<script setup lang="ts">
interface IProps {
  categoryIcon?: string;
  icon?: string;
  organisation?: string;
  title: string;
  time: string;
  category?: string;
  description: string;
  slots: number;
}

defineProps<IProps>();
</script>
