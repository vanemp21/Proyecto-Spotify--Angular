import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
/*-----------------ANOTACIÓN----------------*/
/* Son dos arrays donde declara que de cualquier tipo y estan vacios*/
/*-------------------------------------------*/
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }  


  customOptions: Array<any> = [] 

//por si tienes que meter algun servicio de otro componente en otro sitio (private trackService:TrackService)
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [ 
      /*-----------------ANOTACIÓN----------------*/
      /*el defaultOptions del mainMenu de este archivo.ts*/
      /*-------------------------------------------*/
      
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
// voy a escuchar lo que está en trackservice en datarandom, me suscribo, agarro la canción que está entrando (response)
    // this.trackService.dataTracksRandom$
    // .subscribe((response:any) => {
    //   this.customOptions.push({//añade al array de arriba de customoptions una canción más
    //     name: response[0].name,
    //     router: []
    //   })
    // } )


  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })

  }
}