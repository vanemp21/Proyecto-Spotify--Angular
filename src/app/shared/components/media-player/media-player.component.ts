import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //Programación reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  /*-----------------ANOTACIÓN----------------*/
  /* lo del trackmodel es el tipo que va a ser y está definido como interface en tracks.model.ts*/
  /*-------------------------------------------*/
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b2732d1f4980561c7b2a9920c700',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'https://localhost/track',
    _id: 1
  }
listObservers$:Array<Subscription> = []


  //Aquí inyectamos el multimediaservice y en el otro lo emitimos con emit
  constructor(private multimedimediaService: MultimediaService) { }
  /*-----------------ANOTACIÓN----------------*/
  /*Hay que escuchar lo que se emite (emit) en el ngoninit
   esto va a ser igual a lo que yo pueda escuchar de callback al cual me voy a suscribir
   el cual tiene una respuesta tiene que ser una cancion del componente Trackmodel*/
  /*-------------------------------------------*/
  ngOnInit(): void { //El ngOninit es el primero que se ejecuta después del constructor
    const observer1$: Subscription = this.multimedimediaService.callback.subscribe(
      (response: TrackModel) => {

      }
    )
    this.listObservers$ = [observer1$] //Esto en caso de que tenga mas de una suscripción [observer1$, observer2$ etc..]
  }
  ngOnDestroy(): void { //Este es el último que se ejecuta antes de construir el componente
    this.listObservers$.forEach(u => u.unsubscribe())//cuando se vaya a destruir el componente recorre todo el array y desuscribete
  }
}
