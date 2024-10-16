<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  useIonRouter
} from '@ionic/vue';
import {Location} from "@/types/data";

const router = useIonRouter()

defineProps<{
  location: Location
}>()
</script>
<template>
  <ion-card v-if="location">
    <ion-card-header>
      <ion-card-title>{{ location.name }}</ion-card-title>
      <ion-card-subtitle>{{ location.dimension }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <p v-for="(resident, idx) in location.residents.slice(-3)" :key="idx">{{ resident }}</p>
      <ion-button @click="router.push(`/location/${location.id}`)">Подробнее</ion-button>
    </ion-card-content>
  </ion-card>
</template>
