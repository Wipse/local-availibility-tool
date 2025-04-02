<template>
  <section class="py-20 grid grid-cols-12">
    <div class="col-start-2 col-span-10">
      <StandardCard
        v-for="(item, index) in mergedAvailability"
        :key="index"
        :title="item.title"
        :time="item.time || 'Geen tijd vermeld'"
        :organisation="item.organisation"
        :category-icon="item.categoryIcon || '➖'"
        :category="item.category || 'Geen categorie'"
        :description="item.description"
        :slots="item.slots"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import StandardCard from "./StandardCard.vue";

interface AvailabilityData {
  icon?: string;
  title: string;
  time: string;
  organisation: string;
  categoryIcon?: string;
  category?: string;
  description: string;
  slots: number;
}

const availabilityData = ref<{
  zonnebloem_availibility?: AvailabilityData[];
  speelboom_availibility?: AvailabilityData[];
  pleintje_availibility?: AvailabilityData[];
} | null>(null);

// Computed property die de twee arrays samenvoegt
const mergedAvailability = computed(() => {
  return [
    ...(availabilityData.value?.zonnebloem_availibility || []),
    ...(availabilityData.value?.speelboom_availibility || []),
    ...(availabilityData.value?.pleintje_availibility || []),
  ];
});

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/availability");
    if (!response.ok) throw new Error("Fout bij ophalen data");
    availabilityData.value = await response.json();
  } catch (error) {
    console.error("Fout bij ophalen van de beschikbaarheid:", error);
  }
});
</script>
