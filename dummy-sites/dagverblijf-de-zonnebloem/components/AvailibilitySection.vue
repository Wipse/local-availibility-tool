<template>
  <section class="grid grid-cols-12 py-20 md:py-40">
    <div class="col-start-2 col-span-4 md:block hidden">
      <!-- eslint-disable-next-line -->
      <img
        class="object-cover rounded-xl h-full w-full aspect-square"
        src="public/happy-kids.jpg"
      />
    </div>
    <div class="col-start-2 col-span-10 md:col-start-7 md:col-span-5">
      <div
        class="bg-amber-200 text-amber-950 text-3xl font-bold flex gap-x-2 w-fit px-6 py-2 rounded-xl"
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
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import AvailibilityCard from "../components/AvailabilityCard.vue";

interface AvailabilityData {
  zonnebloem_availibility: {
    organisation: string;
    icon: string;
    title: string;
    time: string;
    description: string;
    slots: number;
  }[];
}

function getAvailabilityData() {
  return {
    zonnebloem_availibility: cards.map((card) => ({
      organisation: "de Zonnebloem",
      icon: card.icon,
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
    icon: "☀️",
    title: "Ochtendprogramma",
    time: "08:30 - 12:00",
    description:
      "De ochtend begint met leuke spelletjes en creatieve activiteiten. We knutselen, zingen liedjes en doen interactieve spelletjes die de fantasie van de kinderen prikkelen. Natuurlijk is er ook tijd om even lekker buiten te spelen!",
    slots: 3,
  },
  {
    id: 2,
    icon: "🕛",
    title: "Middagprogramma",
    time: "13:00 - 17:30",
    description:
      "Na de lunch gaan we op avontuur! De kinderen kunnen kiezen uit verschillende activiteiten zoals een speurtocht, een knutselworkshop of een gezellige voorleesmiddag. We zorgen ervoor dat iedereen iets leuks te doen heeft.",
    slots: 0,
  },
  {
    id: 3,
    icon: "🧮",
    title: "Dagprogramma",
    time: "08:30 - 17:30",
    description:
      "Een dag vol plezier! We starten met spelletjes en knutselen, daarna genieten we van een verhaaltje en een gezond tussendoortje. In de middag gaan we lekker naar buiten om te spelen en ontdekken. Perfect voor een dag vol avontuur!",
    slots: 5,
  },
];
</script>
