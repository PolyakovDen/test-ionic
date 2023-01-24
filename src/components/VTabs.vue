<script setup lang="ts">
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet
  } from '@ionic/vue'
  import { ellipse, triangle } from 'ionicons/icons'

const beforeTabChange = () => {
  console.log('beforeTabChange')
  // do something before tab change
}
const afterTabChange = () => {
  console.log('afterTabChange')
  // do something after tab change
}
</script>

<template>
  <ion-page>
    <ion-content>
      <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
        <ion-router-outlet />
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tasks" href="/tabs/tasks">
            <ion-icon :icon="triangle" />
            <ion-label>Tasks</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="notifications" href="/tabs/notifications">
            <ion-icon :icon="ellipse" />
            <ion-label>Notifications</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>