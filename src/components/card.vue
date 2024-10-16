<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  useIonRouter
} from '@ionic/vue';
import {Character} from "@/types/data";

const router = useIonRouter()

defineProps<{
  card: Character
}>()
</script>
<template>
  <ion-card v-if="card">
    <img alt="Silhouette of mountains" :src="card.image" />
    <ion-card-header>
      <ion-card-title>{{ card.name }}</ion-card-title>
      <ion-card-subtitle>{{ card.gender }}</ion-card-subtitle>
      <ion-card-subtitle>{{ card.location.name }}</ion-card-subtitle>
      <ion-card-subtitle>{{ card.species }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <p v-for="(episode, idx) in card.episode.slice(-3)" :key="idx">{{ episode }}</p>
      <ion-button @click="router.push(`/character/${card.id}`)">Подробнее</ion-button>
    </ion-card-content>
  </ion-card>
</template>
