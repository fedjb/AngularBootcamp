import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
//import * as dataRaw from '../../../data/tracks.json'


@Component({
  selector: 'track-list-body',
  templateUrl: './track-list-body.component.html',
  styleUrls: ['./track-list-body.component.css']
})
export class TrackListBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }

  ngOnInit(): void {
    //const { data }: any = (dataRaw as any).default
    //this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }

}