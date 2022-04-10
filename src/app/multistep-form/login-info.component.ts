import { OnInit, Input, Output, EventEmitter, Component } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login-info',
  template: `TODO`,
})
export class LoginInfoComponent implements OnInit {
  @Input() startingForm: FormGroup
  @Output() subformInitialized = new EventEmitter<FormGroup>()
  @Output() changeStep = new EventEmitter<void>()
  loginInfoForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.startingForm) {
      this.loginInfoForm = this.startingForm
    } else {
      this.loginInfoForm = this.fb.group({
        username: '',
        password: '',
        // ... continue with the other fields
      })
    }
    this.subformInitialized.emit(this.loginInfoForm)
  }

  doChangeStep() {
    this.changeStep.emit()
  }
}
