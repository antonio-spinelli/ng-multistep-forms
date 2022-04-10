import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-multistep-form-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Multi-Step Form</ion-title>
        <ion-buttons slot="end">
          <ion-button slot="icon-only" (click)="dismiss()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <app-multistep-form></app-multistep-form>
    </ion-content>
  `,
})
export class MultiStepFormModalComponent {
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss()
  }
}
