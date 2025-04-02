<template>
  <section class="grid grid-cols-12 py-20 md:py-40">
    <div class="col-start-2 col-span-5">
      <div
        class="bg-sky-200 text-sky-950 text-3xl font-bold flex gap-x-2 w-fit px-6 py-2 rounded-xl"
      >
        <span> 📋 </span>
        <h2>Beschikbaarheid</h2>
      </div>
      <ul class="flex mt-6 flex-col gap-y-6">
        <AvailibilityCard
          v-for="card in cards"
          id="card"
          :key="card.id"
          :icon="card.icon"
          :title="card.title"
          :time="card.time"
          :description="card.description"
          :slots="card.slots"
          :category="card.category"
          :category-icon="card.categoryIcon"
        />
      </ul>
    </div>
    <div class="col-start-8 col-span-4 md:block hidden">
      <!-- eslint-disable-next-line -->
      <img
        class="object-cover rounded-xl h-full w-full aspect-square"
        src="public/happy-kids.jpg"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import AvailibilityCard from "../components/AvailabilityCard.vue";

interface AvailabilityData {
  pleintje_availibility: {
    organisation: string;
    categoryIcon: string;
    category: string;
    title: string;
    time: string;
    description: string;
    slots: number;
  }[];
}

function getAvailabilityData() {
  return {
    pleintje_availibility: cards.map((card) => ({
      organisation: "het Pleintje",
      categoryIcon: card.categoryIcon,
      category: card.category,
      title: card.title,
      time: card.time,
      description: card.description,
      slots: card.slots,
    })),
  };
}

onMounted(() => {
  function saveAvailabilityData(data: AvailabilityData) {
    fetch("http://localhost:8000/save-availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data succesvol opgeslagen:", data);
      })
      .catch((error) => console.error("Fout bij opslaan:", error));
  }

  const availabilityData = getAvailabilityData();
  saveAvailabilityData(availabilityData);

  console.log(getAvailabilityData());
});

const cards = [
  {
    id: 1,
    icon: "🏡",
    title: "Ochtendpret",
    time: "08:00 - 12:00",
    description:
      "Begin de dag met een vrolijk programma vol dans, muziek en creatieve knutselsessies. Kinderen starten hun ochtend met energie en plezier!",
    slots: 0,
    category: "Actief & Creatief",
    categoryIcon: "🎨",
  },
  {
    id: 2,
    icon: "🌳",
    title: "Middag Buitenavontuur",
    time: "13:00 - 16:00",
    description:
      "Een middag vol buitenactiviteiten! Van speurtochten tot sport en spel in de frisse lucht. De perfecte manier om actief en gezond te blijven.",
    slots: 2,
    category: "Buiten & Natuur",
    categoryIcon: "🏕️",
  },
  {
    id: 3,
    icon: "📖",
    title: "Rustige Voorleesmiddag",
    time: "14:00 - 16:30",
    description:
      "Na de lunch kunnen kinderen heerlijk ontspannen met mooie verhalen en interactieve voorleesmomenten. Perfect voor een rustige middag.",
    slots: 1,
    category: "Educatief & Ontspannend",
    categoryIcon: "📚",
  },
  {
    id: 4,
    icon: "🔬",
    title: "Wetenschap & Ontdekken",
    time: "10:00 - 12:30",
    description:
      "Voer leuke experimenten uit en ontdek hoe de wereld werkt! Leren en spelen komen samen in dit interactieve ochtendprogramma.",
    slots: 0,
    category: "Wetenschap & Experimenten",
    categoryIcon: "🧪",
  },
  {
    id: 5,
    icon: "🎭",
    title: "Theater & Fantasie",
    time: "15:00 - 17:30",
    description:
      "Laat je creativiteit de vrije loop en speel in leuke toneelstukjes. Kinderen kunnen verkleden, scènes bedenken en zichzelf uitdrukken in een speelse setting!",
    slots: 5,
    category: "Theater & Verbeelding",
    categoryIcon: "🎭",
  },
];
</script>
