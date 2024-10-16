<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButton, useIonRouter} from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

const router = useIonRouter()
</script>
<template>
  <ion-page>
    <ion-tabs>
      <ion-button @click="router.navigate('/')">На главную</ion-button>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/ionic-tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/ionic-tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/ionic-tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
