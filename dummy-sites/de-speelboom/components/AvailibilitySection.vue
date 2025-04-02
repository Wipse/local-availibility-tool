<template>
  <section class="grid grid-cols-12 py-20 md:py-40">
    <div class="col-start-2 col-span-10">
      <div
        class="mx-auto text-emerald-950 text-4xl font-bold flex gap-x-2 w-fit px-6 py-2 rounded-xl"
      >
        <span> 📋 </span>
        <h2>Beschikbaarheid</h2>
        <span> 📋 </span>
      </div>
      <ul class="grid grid-cols-12 gap-8 mt-12">
        <AvailibilityCard
          v-for="card in cards"
          id="card"
          :key="card.id"
          :category-icon="card.categoryIcon"
          :title="card.title"
          :category="card.category"
          :description="card.description"
          :slots="card.slots"
          class="lg:col-span-4 sm:col-span-6 col-span-12"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import AvailibilityCard from "../components/AvailabilityCard.vue";

interface AvailabilityData {
  speelboom_availibility: {
    organisation: string;
    categoryIcon: string;
    title: string;
    category: string;
    description: string;
    slots: number;
  }[];
}

function getAvailabilityData() {
  return {
    speelboom_availibility: cards.map((card) => ({
      organisation: "de Speelboom",
      categoryIcon: card.categoryIcon || "",
      title: card.title,
      category: card.category,
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
    categoryIcon: "🌞",
    category: "Actief & Creatief",
    title: "Ochtendavontuur",
    description:
      "Begin de dag met energieke activiteiten zoals dans, muziek en knutselen. Kinderen starten vol enthousiasme aan hun dag!",
    slots: 3,
  },
  {
    id: 2,
    categoryIcon: "🍎",
    category: "Natuur & Leren",
    title: "Middagontdekkers",
    description:
      "Ontdek de natuur met een speurtocht, een moestuinworkshop of een interactieve voorleeshoek. Een leerzame en leuke middag!",
    slots: 0,
  },
  {
    id: 3,
    categoryIcon: "🎭",
    category: "Theater & Verbeelding",
    title: "Fantasiewereld",
    description:
      "Laat kinderen hun eigen verhalen bedenken en naspelen met kostuums en toneelstukken. Een podium vol creativiteit!",
    slots: 5,
  },
  {
    id: 4,
    categoryIcon: "🛝",
    category: "Sport & Spel",
    title: "Buitenpret",
    description:
      "Klim, klauter en speel in onze veilige buitenruimte met uitdagende spelletjes en teamwork. Lekker bewegen en plezier maken!",
    slots: 0,
  },
  {
    id: 5,
    categoryIcon: "🔬",
    category: "Wetenschap & Ontdekken",
    title: "Kleine Uitvinders",
    description:
      "Voer leuke experimenten uit en ontdek hoe de wereld werkt op een speelse manier. Een mix van leren en plezier!",
    slots: 2,
  },
  {
    id: 6,
    categoryIcon: "🎨",
    category: "Creatief & Expressief",
    title: "Kunstenaarsatelier",
    description:
      "Van schilderen tot kleien: hier kunnen kinderen hun creativiteit de vrije loop laten en kunstwerken maken!",
    slots: 4,
  },
];
</script>
