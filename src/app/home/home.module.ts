import { NgModule } from '@angular/core'
import { HomePage } from './home.page'
import { HomePageRoutingModule } from './home-routing.module'
import { SharedModule } from '../shared.module'
import { MultistepFormModule } from '../multistep-form/multistep-form.module'

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, MultistepFormModule],
  declarations: [HomePage],
})
export class HomePageModule {}
