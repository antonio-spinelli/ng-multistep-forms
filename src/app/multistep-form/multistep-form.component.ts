import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
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
            <p>{{ userForm.value | json }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <app-personal-info
        *ngSwitchCase="'personalInfo'"
        [startingForm]="userForm.get('personalInfo').value"
        (subformInitialized)="subformInitialized('personalInfo', $event)"
        (changeStep)="changeStep('personalInfo', 'forward')"
      ></app-personal-info>

      <app-login-info
        *ngSwitchCase="'loginInfo'"
        [startingForm]="userForm.get('loginInfo').value"
        (subformInitialized)="subformInitialized('loginInfo', $event)"
        (changeStep)="changeStep('loginInfo', 'back')"
        (submitForm)="submitForm()"
      ></app-login-info>
    </ng-container>
  `,
})
export class MultiStepFormComponent implements OnInit {
  userForm: FormGroup
  private currentStepBs = new BehaviorSubject<Step>('personalInfo')

  constructor(private fb: FormBuilder) {}

  get currentStep$() {
    return this.currentStepBs.asObservable()
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      personalInfo: null,
      loginInfo: null,
    })
  }

  subformInitialized(name: string, group: FormGroup) {
    this.userForm.setControl(name, group)
  }

  changeStep(currentStep: Step, direction: 'forward' | 'back') {
    switch (currentStep) {
      case 'personalInfo':
        if (direction === 'forward') {
          this.currentStepBs.next('loginInfo')
        }
        break
      case 'loginInfo':
        if (direction === 'back') {
          this.currentStepBs.next('personalInfo')
        }
        break
    }
  }

  submitForm() {
    const formValues = this.userForm.value
    // submit the form with a service
  }
}
