<template>
  <article
    class="p-6 shadow hover:shadow-2xl flex flex-col gap-y-1 transition-all hover:cursor-pointer rounded-xl"
  >
    <div>
      <div class="flex items-center gap-x-1.5 text-sky-950">
        <h3 class="text-xl font-bold">{{ title }}</h3>
        <div v-if="slots !== 0" class="flex gap-x-2 items-center">
          <span class="font-semibold text-green-600">
            {{
              slots + slots === 1
                ? " - " + slots + " slot beschikbaar"
                : " - " + slots + " slots beschikbaar!"
            }}
          </span>
        </div>
        <div v-else class="font-bold text-red-600">
          - Geen beschikbare plaatsen...
        </div>
      </div>
    </div>
    <p class="line-clamp-2">
      {{ description }}
    </p>
    <div>
      <time> {{ "🕒 " + time }} </time>
      <p>{{ categoryIcon + " " + category }}</p>
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
  category?: string;
  categoryIcon?: string;
}

withDefaults(defineProps<IProps>(), {
  category: "Categorie",
  categoryIcon: "🧠",
});
</script>
