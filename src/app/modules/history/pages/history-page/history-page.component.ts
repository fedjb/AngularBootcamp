import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }  
  receiveData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cunado tiene 3 caracters
    console.log('🎁 Estoy en el padre jua jua...', event);
    this.listResults$ = this.searchService.searchTracks$(event)

  }
  
}
