import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationPageComponent } from './pages/components/administration-page/administration-page.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TrackListBodyComponent } from './pages/components/track-list-body/track-list-body.component';

@NgModule({
  declarations: [
    AdministrationPageComponent,
    TrackListBodyComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,    
    SharedModule    
  ]
})
export class AdministrationModule { }
