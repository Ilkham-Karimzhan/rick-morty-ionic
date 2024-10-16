<script lang="ts" setup>
import {onBeforeMount} from "vue";
import {IonPage, IonContent, useIonRouter, IonCol, IonRow, IonGrid, IonButton} from "@ionic/vue";
import {useCharacterList} from "@/utils/useCharacterList";
import {useLocationList} from "@/utils/useLocationList";
import LocationCard from "@/components/location-card.vue";
import Card from "@/components/card.vue";

const {characters} = useCharacterList()
const {locations} = useLocationList()

const fetchCharacters = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
    characters.value = response.results
  } catch (error) {
    console.error(error)
  }
}

const fetchLocations = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/location').then(res => res.json())
    locations.value = response.results
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => Promise.allSettled([fetchCharacters(), fetchLocations()]))
</script>
<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-4">
                <h1 class="text-2xl uppercase">Characters</h1>
                <div>
                  <ion-button router-link="/gallery">Галерея</ion-button>
                  <ion-button router-link="/tabs">К табам</ion-button>
                  <ion-button router-link="/ionic-tabs">Ionic-tabs</ion-button>
                </div>
              </div>
              <div class="grid grid-cols-2 xl:grid-cols-3 gap-4">
                <card v-for="(c, idx) in characters" :key="idx" :card="c"/>
              </div>
              <h1 class="text-2xl uppercase">Locations</h1>
              <div class="grid grid-cols-2 xl:grid-cols-3 gap-4">
                <location-card v-for="(l, idx) in locations" :key="idx" :location="l"/>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
