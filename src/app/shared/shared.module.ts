import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';


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
    PlayListHeaderComponent
  ],
  imports: [
    CommonModule,
 

  ],
  /*-----------------ANOTACIÓN----------------*/
  /*El archivo padre que es este exporta estos componentes para luego importar SharedModule donde se necesite*/
  /*-------------------------------------------*/
  exports:[
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent
  ]
})


export class SharedModule { }
