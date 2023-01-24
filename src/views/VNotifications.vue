<script setup lang="ts">
import { actionSheetController, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';

const presentActionSheet = async () => {
  const actionSheet = await actionSheetController.create({
    header: 'Delete Notification',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ],
  });

  await actionSheet.present();
};
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-list>
          <ion-item>
            <ion-select placeholder="Select company">
              <ion-select-option value="Test1">Test1</ion-select-option>
              <ion-select-option value="Test2">Test2</ion-select-option>
              <ion-select-option value="test3">test3</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
        <strong>Ready to create a notifications?</strong>
        <ion-button @click="presentActionSheet">Action menu</ion-button>
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
