import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})


export class PlayListBodyComponent implements OnInit {
  tracks: TrackModel[] = []
  /*-----------------ANOTACIÓN----------------*/
  /*el OptionSort es la inicializacion por defecto del orden es decir que luego
  en el html puede poner orderList:optionSort.property:optionSort.order*/
  /*-------------------------------------------*/
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }
  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.tracks = data;
  }
  /*-----------------ANOTACIÓN----------------*/
  /*va a recibir un string y no va a devolver nada, solo va a ejecutar la función */
  /*-------------------------------------------*/
  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property: property, //es el name, album etc 
      order: order === 'asc' ? 'desc' : 'asc' // de que manera se va a ordenar
    }
  }
}
