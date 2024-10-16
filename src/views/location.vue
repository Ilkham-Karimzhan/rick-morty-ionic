<script lang="ts" setup>
import {IonContent, IonPage, IonButton} from "@ionic/vue";
import {useRoute} from "vue-router";
import {onBeforeMount, ref} from "vue";
import LocationCard from "@/components/location-card.vue";

const route = useRoute()

const location = ref()

const fetchLocation = async () => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${route.params.id}`)
    location.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(fetchLocation)
</script>
<template>
  <ion-page>
    <ion-button router-link="/">Return to main</ion-button>
    <ion-content>
      <location-card :location="location" />
    </ion-content>
  </ion-page>
</template>
