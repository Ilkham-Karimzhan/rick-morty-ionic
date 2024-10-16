<script lang="ts" setup>
import {useGallery} from '@/utils/useGallery'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonFabButton,
  IonIcon,
  IonPage,
  useIonRouter
} from '@ionic/vue';
import {camera} from "ionicons/icons";
import {isPlatform} from '@ionic/vue';

const router = useIonRouter()

const {photos, takePhoto} = useGallery()
</script>
<template>
  <ion-page>
    <div class="flex flex-col gap-4">
      <ion-button @click="router.push('/')">Назад</ion-button>
      <ion-card class="p-2">
        <ion-card-header>
          <ion-card-title>Фото галлерея</ion-card-title>
          <ion-card-subtitle>Данные храняться локально</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="(img, idx) in photos" :key="idx" slot="start">
              <ion-thumbnail>
                <div class="w-20">
                  <img :src="img.webviewPath" alt="Silhouette of mountains" class="w-full h-full"/>
                </div>
              </ion-thumbnail>
              <ion-label slot="end">{{ img.filepath }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
        <ion-button v-if="isPlatform('desktop')" @click="takePhoto">Сделать фото</ion-button>
        <ion-fab-button v-else @click="takePhoto">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-card>
    </div>
  </ion-page>
</template>
