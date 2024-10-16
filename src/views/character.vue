<script lang="ts" setup>
import {IonContent, IonPage, IonGrid, IonCol, IonRow, IonButton} from "@ionic/vue";
import {useRoute} from "vue-router";
import {onBeforeMount, ref} from "vue";
import Card from "@/components/card.vue";

const route = useRoute()

const character = ref()

const fetchCharacter = async () => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${route.params.id}`)
    character.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(fetchCharacter)
</script>
<template>
  <ion-page>
    <ion-button router-link="/">Return to main</ion-button>
    <ion-content>
      <card :card="character" />
    </ion-content>
  </ion-page>
</template>
