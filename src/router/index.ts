import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Main from '@/views/index.vue'
import Character from "@/views/character.vue";
import Location from "@/views/location.vue";
import Gallery from "@/views/gallery.vue";
import Tabs from "@/views/tabs.vue";
import BaseContentTab from "@/views/tabs/index.vue";
import Tab1 from "@/views/tabs/tab1.vue";
import Tab2 from "@/views/tabs/tab2.vue";
import Tab3 from "@/views/tabs/tab3.vue";
import IonicTabs from "@/views/ionic-tabs.vue";
import IonicTab1 from "@/views/ionic-tabs/tab1.vue";
import IonicTab2 from "@/views/ionic-tabs/tab2.vue";
import IonicTab3 from "@/views/ionic-tabs/tab3.vue";
import IonicOutsideTab from "@/views/ionic-outside-tab.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main List',
    component: Main
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character
  },
  {
    path: '/location/:id',
    name: 'Planet',
    component: Location
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs,
    children: [
      {
        path: '/tabs/',
        component: BaseContentTab
      },
      {
        path: '/tabs/tab1',
        component: Tab1
      },
      {
        path: '/tabs/tab2',
        component: Tab2
      },
      {
        path: '/tabs/tab3',
        component: Tab3
      }
    ]
  },
  {
    path: '/ionic-tabs',
    name: 'Ionic Tabs',
    component: IonicTabs,
    children: [
      {
        path: '/ionic-tabs/tab1',
        component: IonicTab1
      },
      {
        path: '/ionic-tabs/tab2',
        component: IonicTab2
      },
      {
        path: '/ionic-tabs/tab3',
        component: IonicTab3
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
