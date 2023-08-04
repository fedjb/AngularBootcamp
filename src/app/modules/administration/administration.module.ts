import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AdministrationPageComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,    
    SharedModule    
  ]
})
export class AdministrationModule { }
