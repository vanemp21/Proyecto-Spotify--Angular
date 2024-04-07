/*-----------------ANOTACIÓN----------------*/
/*Esto va a exportar el modelo de datos de una canción*/

import { ArtistModel } from "./artist.model";

/*-------------------------------------------*/
export interface TrackModel{
    name:string;
    album:string;
    cover:string;
    url:string;
    _id:string | number;
    artist?:ArtistModel;

}