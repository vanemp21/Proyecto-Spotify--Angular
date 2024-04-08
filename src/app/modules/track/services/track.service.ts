import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
//import { TrackModel } from '@core/models/tracks.model';

//import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // dataTracksTrending$:Observable<TrackModel[]> = of([]) //Observa e iníciate como un array vacío
  // dataTracksRandom$:Observable<TrackModel[]> = of([])

  // const {data}: any = (dataRaw as any).default; //quiero que ese observable tenga los datos del tracks.json
  // this.dataTracksTrending$ = of(data) //ahora obsérvalo y debemos suscribirnos o nunca obtendremos la data en el componente.ts
  // this.dataTracksRandom$ = new Observable((observer)=> {// es una manera de crear un observable
  //   const trackExample:TrackModel = {
  //     _id:9,
  //     name:'Leve',
  //     album:'Cartel de Santa',
  //     url: 'https//www.google.com',
  //     cover: ''
  //   }


  //   setTimeout(() => {
  //     observer.next([trackExample])
  //   }, 3500);
  // })
  // private readonly URL = environment.api; esto hace referencia a "api:" el enviroment.ts
  constructor(private http:HttpClient) { 
    
   }
   /**
    * @returns Devolver todas las canciones
    */
   private readonly URL = environment.api
   getAllTracks$(): Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any) => {
        return data
      })
    )
   }
   /**
    * @returns Devolver canciones random
    */
   getAllRandom$(): Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any) => {
        return data.reverse()
      }),
      catchError((err)=> {
        console.log('Algo pasó, revísame 💀')
        return of([])
      })
    )

   }


}
