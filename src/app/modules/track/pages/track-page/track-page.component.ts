import { Component,OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
export class TrackPageComponent implements OnInit{
  mockTracksList: Array<TrackModel> =[

  ]
  constructor() { }

  ngOnInit(): void {
    /*-----------------ANOTACIÓN----------------*/
    /*el data que lo he importado de tracks.json es un array de objetos y se desestructura de tipo any y entonces
    le digo que mockTrackList es igual al array de data*/
    /*-------------------------------------------*/
    const {data}:any = (dataRaw as any).default
    this.mockTracksList = data;
  }
}
