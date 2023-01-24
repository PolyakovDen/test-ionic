<script setup lang="ts">
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton,
  onIonViewWillEnter,
  onIonViewDidEnter,
  onIonViewDidLeave,
  onIonViewWillLeave,
  IonSpinner
} from '@ionic/vue';
import { ref } from 'vue';

const showSpinner = ref(false)

onIonViewDidEnter(() => {
  setTimeout(() => {
    showSpinner.value = false
  }, 5000)
  console.log('Detail page did enter');
});

onIonViewDidLeave(() => {
  console.log('Detail page did leave');
});

onIonViewWillEnter(() => {
  showSpinner.value = true
  console.log('Detail page will enter');
});

onIonViewWillLeave(() => {
  console.log('Detail page will leave');
});
</script>

<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-spinner name="dots" v-if="showSpinner" />
        <div v-else>
          <ion-button router-link="/">Go Back</ion-button>
          <p>Details</p>
        </div>
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
