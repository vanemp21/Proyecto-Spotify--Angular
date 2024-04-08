import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',

})
export class OrderListPipe implements PipeTransform {
/*-----------------ANOTACIÓN----------------*/
/* Aquí puedo modificar el return con el valor que quiera o el value modificado*/
/*Aquí va a devolver un array de tipo trackmodel
Aquí pide que deba ser un array, el value equivale al "orderlist" que es el array, el segundo argumento sera lo que se quiera ordenar ej titulo y el tercer argumento de que manera
si asc, desc etc*/
/*-------------------------------------------*/
  transform(value: Array<any>, args:string | null = null, sort:string = 'asc' ): Array<any> {
    if (args === null) {
      return value
    } else {
      const tmpList = value.sort((a, b) => {
        if (a[args] < b[args]) {
          return -1
        }
        else if (a[args] === b[args]) {
          return 0;
        }
        else if (a[args] > b[args]) {
          return 1;
        }
        return 1
      });
      /*-----------------ANOTACIÓN----------------*/
      /*Si el orden es ascendente ? devuelvemelo tal cual está, si no, dale la vuelta al descendente para que sea ascendente*/
      /*-------------------------------------------*/

      return (sort === 'asc') ? tmpList : tmpList.reverse()
    }
  }

}