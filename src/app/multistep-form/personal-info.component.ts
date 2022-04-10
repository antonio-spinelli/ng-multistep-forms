import { OnInit, Input, Output, EventEmitter, Component } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-personal-info',
  template: `TODO`,
})
export class PersonalInfoComponent implements OnInit {
  @Input() startingForm: FormGroup
  @Output() subformInitialized = new EventEmitter<FormGroup>()
  @Output() changeStep = new EventEmitter<void>()
  personalInfoForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.startingForm) {
      this.personalInfoForm = this.startingForm
    } else {
      this.personalInfoForm = this.fb.group({
        firstName: '',
        lastName: '',
        // ... continue with the other fields
      })
    }
    this.subformInitialized.emit(this.personalInfoForm)
  }

  doChangeStep() {
    this.changeStep.emit()
  }
}
