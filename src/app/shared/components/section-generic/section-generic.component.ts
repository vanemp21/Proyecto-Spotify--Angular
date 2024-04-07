import { Component, Input, OnInit, input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic', 
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})

export class SectionGenericComponent implements OnInit {
  @Input() title:string = ''
  @Input() mode: 'small' | 'big' = 'big'
  /*-----------------ANOTACIÓN----------------*/
  /*Este array tambien debe cumplir con la estructura de tracks.model.ts osea es de tipo de trackmodel*/
  /*-------------------------------------------*/
  @Input() dataTracks: Array<TrackModel>= []
  constructor() { }

  ngOnInit(): void {}
}
