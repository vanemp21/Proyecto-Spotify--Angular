import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    /*-----------------ANOTACIÓN----------------*/
    /*El homeRoutingModule es el modulo donde esta el componente de este apartado*/
    /*-------------------------------------------*/
    HomeRoutingModule,
    /*-----------------ANOTACIÓN----------------*/
    /*Importamos los componentes de shared.module.ts que es una agrupacion de componentes exportados que son compartidos en plan header o footer*/
    /*-------------------------------------------*/
    SharedModule
  ]
})
export class HomeModule { }
