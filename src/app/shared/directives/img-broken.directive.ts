import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  /*-----------------ANOTACIÓN----------------*/
  /*el custom img sirve para añadir ese atributo en el img por si prefieres poner otra imagen de error que la de por defecto
  entonces se añade appImgBroken [customImg]="imagen.png"
  para ello en la linea 22 elNative debe ser elNative = this.customImg*/
  /*-------------------------------------------*/
  @Input() customImg:string = ''
  /*-----------------ANOTACIÓN----------------*/
  /*el hostlistener es, capturame si hay algun error de las imagenes */
  /*-------------------------------------------*/

  @HostListener('error') handleError():void{
 
  //esto es para pillar los atributos del img y luego puedo pillar el atributo que necesito en este caso el src
  const elNative = this.elHost.nativeElement
  console.log('⛔ Esta imagen reventí -->', this.elHost)
  elNative.src = '../../../assets/images/not-found.PNG'
  }
/*-----------------ANOTACIÓN----------------*/
/*elHost se refiere al selector y el elementref es una palabra reservada
en este caso son las imagenes que hay, es decir, haz referencia a las imagenes que hay
si se pone un console log mostrará todas las imagenes a las que hace referencia*/
/*-------------------------------------------*/

constructor(private elHost:ElementRef) { }

}
