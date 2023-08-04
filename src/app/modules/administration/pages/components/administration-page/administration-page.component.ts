import { Component,Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchService } from '@modules/history/services/search.service';
import { HttpClient } from '@angular/common/http';
import { TrackService } from '@modules/administration/services/services.service';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.css']
})
export class AdministrationPageComponent {    
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor(private trackService: TrackService) { }  
  tracksTrending: Array<TrackModel> = []
 
  ngOnInit(): void {
    this.loadDataAll()
  }  

  loadDataAll() {          
      this.trackService.getAllTracks$().subscribe((tracks:any)=> {
      this.tracksTrending = tracks;
     })
  }  
}
