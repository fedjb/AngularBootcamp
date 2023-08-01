import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '@shared/shared.module';
//import { HistoryModule } from '@modules/history/history.module';
//import { SearchComponent } from '../../modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { HistoryModule } from '@modules/history/history.module';




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
