import { Input, Output, EventEmitter, Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-personal-info',
  template: `
    <ion-list class="ion-margin-bottom" [formGroup]="baseForm">
      <ion-item>
        <ion-label>First Name</ion-label>
        <ion-input formControlName="firstName"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Last Name</ion-label>
        <ion-input formControlName="lastName"></ion-input>
      </ion-item>
    </ion-list>

    <ion-button class="ion-float-right" (click)="doChangeStep()">Next</ion-button>
  `,
})
export class PersonalInfoComponent {
  @Input() baseForm: FormGroup
  @Output() changeStep = new EventEmitter<'forward' | 'back'>()

  doChangeStep() {
    this.changeStep.emit('forward')
  }
}
