import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'

type Step = 'personalInfo' | 'loginInfo'

@Component({
  selector: 'app-multistep-form',
  template: `
    <ng-container [ngSwitch]="currentStep$ | async">
      <ion-list class="ion-margin-bottom">
        <ion-item>
          <ion-label>
            <h3>User Form Value</h3>
            <p class="ion-text-wrap">{{ userForm.value | json }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <app-personal-info
        *ngSwitchCase="'personalInfo'"
        [baseForm]="getFormGroup('personalInfo')"
        (changeStep)="changeStep('personalInfo', $event)"
      ></app-personal-info>

      <app-login-info
        *ngSwitchCase="'loginInfo'"
        [baseForm]="getFormGroup('loginInfo')"
        (changeStep)="changeStep('loginInfo', $event)"
      ></app-login-info>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button (click)="submitForm()">
          <ion-icon name="checkmark-outline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ng-container>
  `,
})
export class MultiStepFormComponent {
  currentStep$ = new BehaviorSubject<Step>('personalInfo')
  userForm = this.fb.group({
    personalInfo: this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: '',
    }),
    loginInfo: this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }),
  })

  constructor(private fb: FormBuilder) {}

  getFormGroup(key: Step): FormGroup | null {
    const formGroup = this.userForm.get(key)
    return formGroup instanceof FormGroup ? formGroup : null
  }

  subformInitialized(name: Step, group: FormGroup) {
    this.userForm.setControl(name, group)
  }

  changeStep(currentStep: Step, direction: 'forward' | 'back') {
    switch (currentStep) {
      case 'personalInfo':
        if (direction === 'forward') {
          this.currentStep$.next('loginInfo')
        }
        break
      case 'loginInfo':
        if (direction === 'back') {
          this.currentStep$.next('personalInfo')
        }
        break
    }
  }

  submitForm() {
    console.log('Form Validation', this.userForm.valid)
    console.log('Form Value', this.userForm.value)
  }
}
