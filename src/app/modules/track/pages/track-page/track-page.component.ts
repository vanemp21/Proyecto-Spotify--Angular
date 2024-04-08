import { Component, OnInit, OnDestroy } from '@angular/core';
//import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/track/services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
//El track esta usando 2 veces el mismo componente el de sectiongeneric
export class TrackPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = [] // es un array de observers suscritos que se rellena en el ngoninit para luego usarlo en el ondestroy
  constructor(private trackService: TrackService) { } //debe ser tipo TrackService osea observable creado en track.service


  /*-----------------ANOTACIÓN----------------*/
  /*el data que lo he importado de tracks.json es un array de objetos y se desestructura de tipo any y entonces
  le digo que mockTrackList es igual al array de data*/
  /*-------------------------------------------*/
  //   const {data}:any = (dataRaw as any).default
  //   this.mockTracksList = data;
  //----------------ANTERIOR----------------------


  /*-----------------ANOTACIÓN----------------*/
  /*aquí nos hemos suscrito del observer de track.service.ts*/
  /*-------------------------------------------*/
  // const observer1$ = this.trackService.dataTracksTrending$ //vamos a observar las canciones trending
  //   .subscribe(response => { // y la respuesta de eso son el response
  //     this.tracksTrending = response;
  //     this.tracksRandom = response;
  //   })


  //   const observer2$ = this.trackService.dataTracksRandom$ //vamos a observar las canciones trending
  //   .subscribe(response => { // y la respuesta de eso son el response
  //     this.tracksRandom = [... this.tracksRandom, ... response]

  //   })
  //   this.listObservers$=[observer1$, observer2$]
  ngOnInit(): void {
    this.loadDataAll();
  }
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    this.tracksRandom = await this.trackService.getAllRandom$().toPromise()
    
  }
  loadDataRandom(): void {
    // this.trackService.getAllRandom$()
    //   .subscribe((response: TrackModel[]) => {
    //     this.tracksRandom = response;
    //   }, err =>{
    //     console.log('Error de conexión');
    //   })
  }
  ngOnDestroy(): void {

  }
}
