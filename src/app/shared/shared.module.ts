import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';




@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
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
    HeaderUserComponent
  ]
})


export class SharedModule { }
