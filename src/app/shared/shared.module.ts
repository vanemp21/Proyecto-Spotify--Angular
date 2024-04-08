import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';


/*-----------------ANOTACIÓN----------------*/
/*Si sale subrayado en alguna declaración hay que borrar el standalone del componente .ts*/
/*-------------------------------------------*/

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
 

  ],
  /*-----------------ANOTACIÓN----------------*/
  /*El archivo padre que es este exporta estos componentes para luego importar SharedModule donde se necesite*/
  /*-------------------------------------------*/
  exports:[
    SideBarComponent, //es el sidebar
    MediaPlayerComponent, // la barra del play stop etc
    HeaderUserComponent, // todavia no se ha tocado
    CardPlayerComponent, //cada recuadro del artista
    SectionGenericComponent, //el genero de la musica
    PlayListBodyComponent, //la parte donde sale el like, la top del home (Canciones que te gustan)
    PlayListHeaderComponent, // la parte de abajo donde sale la lista de canciones
    OrderListPipe, //para ordenar por nombre, album etc
    ImgBrokenDirective // verificar si esta rota o no una imagen
  ]
})


export class SharedModule { }
