import { Injectable,EventEmitter } from '@angular/core';
/*-----------------ANOTACIÓN----------------*/
/*cuando se importa EventEmitter comprobar que este en @angular/core y no en steam*/
/*-------------------------------------------*/

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback:EventEmitter<any> = new EventEmitter<any>()
    constructor() { }
}
