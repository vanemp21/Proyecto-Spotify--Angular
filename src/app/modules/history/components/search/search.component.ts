import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class SearchComponent implements OnInit {
/*-----------------ANOTACIÓN----------------*/
/*Con el output puedo enviar datos al padre, inicializo el output,
le digo que le voy a enviar (línea 26) 
en el padre donde esta mostrando el componente debe quedar así el html
 <app-search (callbackData)="receiveData($event)"></app-search>
 y en el ts la función de recibir el dato
   receiveData(event: string): void {
    console.log('🎁 Estoy en el padre jua jua...', event);
    this.listResults$ = this.searchService.searchTracks$(event)
0º  (ngModelChange)="callSearch($event)" para recopilar el dato del input en el componente hijo
1º declarar output en el componente hijo 
2º pasar el dato donde el output 
3º en el ts padre función de recibir el dato,
4º<app-search (callbackData)="receiveData($event)"></app-search> ahora mediante el output (pedidadedato) en el appsearch
puedo pedir el dato de receiveData
  }*/
/*-------------------------------------------*/
  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  src: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void {
    if (term.length >= 3) {
      this.callbackData.emit(term)
    }
  }

}
