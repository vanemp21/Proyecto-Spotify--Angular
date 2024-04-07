import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {
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
  constructor() { }
  ngOnInit(): void {

  }
}
