<script setup lang="ts">
import {IonPage, IonContent, IonTitle, IonButton, useIonRouter} from "@ionic/vue";

const router = useIonRouter()
</script>
<template>
  <ion-page>
    <ion-content>
      <ion-title>Заголовок тестовой страницы</ion-title>
      <div>
        <ion-button router-link="/tabs/tab1" router-direction="back">Tab 1</ion-button>
        <ion-button @click="router.navigate('/tabs/tab2')">Tab 2</ion-button>
        <ion-button @click="router.navigate('/tabs/tab3')">Tab 3</ion-button>
      </div>
        <ion-button @click="router.navigate('/')">На главную</ion-button>
      <router-view />
    </ion-content>
  </ion-page>
</template>
