import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TrackService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }
  getAllTracks$(): Observable<any> {         
    
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {                              
          return data
        })
      )
  }

  editTrack$(): Observable<any> {   
    const body = {
      "name":"holis"
    }
    return this.http.put(`${this.URL}/tracks/edit`,body)
      .pipe(
        map(({ data }: any) => {                              
          return data
        })
      )
  }

}
