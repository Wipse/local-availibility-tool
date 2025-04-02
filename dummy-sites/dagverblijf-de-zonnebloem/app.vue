<template>
  <MainHeader />
  <MainHero
    :pretitle="herodata.pretitle"
    :title="herodata.title"
    :description="herodata.description"
    :buttons="herodata.buttons"
  />
  <AvailibilitySection />
  <MainFooter />
</template>

<script setup lang="ts">
import AvailibilitySection from "./components/AvailibilitySection.vue";
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";
import MainHero from "./components/MainHero.vue";

const herodata = {
  pretitle: "Dagverblijf",
  title: "De Zonnebloem",
  description:
    "Bij ons ontdekken kinderen de wereld op hun eigen tempo. We bieden een warme en stimulerende omgeving waar spelen en leren samenkomen. Met zorgzame begeleiders, creatieve activiteiten en veel buitenspeeltijd zorgen we voor een dag vol plezier en avontuur!",
  buttons: {
    first: "Inschrijven",
    second: "Meer informatie",
  },
};
</script>
