import { NgModule } from '@angular/core'
import { SharedModule } from '../shared.module'
import { LoginInfoComponent } from './login-info.component'
import { MultiStepFormModalComponent } from './multistep-form-modal.component'
import { MultiStepFormComponent } from './multistep-form.component'
import { PersonalInfoComponent } from './personal-info.component'

const COMPONENTS = [MultiStepFormComponent, PersonalInfoComponent, LoginInfoComponent, MultiStepFormModalComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule],
  exports: [...COMPONENTS],
})
export class MultistepFormModule {}
