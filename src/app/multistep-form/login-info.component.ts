import { Input, Output, EventEmitter, Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login-info',
  template: `
    <ion-list class="ion-margin-bottom" [formGroup]="baseForm">
      <ion-item>
        <ion-label>Username</ion-label>
        <ion-input formControlName="username"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Password</ion-label>
        <ion-input formControlName="password"></ion-input>
      </ion-item>
    </ion-list>

    <ion-button class="ion-float-left" (click)="doChangeStep()">Back</ion-button>
  `,
})
export class LoginInfoComponent {
  @Input() baseForm: FormGroup
  @Output() changeStep = new EventEmitter<'forward' | 'back'>()

  doChangeStep() {
    this.changeStep.emit('back')
  }
}
