import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { MultiStepFormModalComponent } from '../multistep-form/multistep-form-modal.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {}

  async openMultiStepForm() {
    const modal = await this.modalCtrl.create({
      component: MultiStepFormModalComponent,
    })
    await modal.present()
  }
}
