<script setup lang="ts">
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonModal, 
  IonButtons,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonSearchbar
} from '@ionic/vue';
import { OverlayEventDetail } from '@ionic/core/components'
import { ref } from 'vue';

const modal = ref()

const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
  if (ev.detail.role === 'confirm') {
    console.log('onWillDismiss');
  }
}

const cancel = () => {
  modal.value.$el.dismiss(null, 'cancel')
}
 
const confirm = () => {
  modal.value.$el.dismiss(null, 'confirm')
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-button router-link="/detail">Go to detail</ion-button>
        <ion-searchbar animated placeholder="Find task"></ion-searchbar>
        <strong>Ready to create a tasks?</strong>
        <ion-button id="open-modal">Create Task</ion-button>
        <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button @click="cancel">Cancel</ion-button>
              </ion-buttons>
              <ion-title>Create task</ion-title>
              <ion-buttons slot="end">
                <ion-button :strong="true" @click="confirm">Confirm</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-item>
              <ion-label position="stacked">Enter task title</ion-label>
              <ion-input ref="input" type="text" placeholder="Task title" />
            </ion-item>
          </ion-content>
        </ion-modal>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
#container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
}
</style>
