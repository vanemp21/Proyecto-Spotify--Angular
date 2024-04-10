import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'
  constructor(public multimediaService: MultimediaService) { }
  //myobservable1$ va a ser una tubería, vas a ponerle un grifo que el observer1$ seria el equivalente
  //a mi ducha y desde el multimediaservice que es el servicio de agua de mi casa quiero conectarme a
  //mi tubería, con esto consigo la primera conexión entre mi componente y el multimedia.service
  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
    /* const observer1$ = this.multimediaService.myObservable1$
    Por ahora no pasa nada, para que fluya el agua debemos suscribirnos, imprescindible en cualquier observable
 // al suscribirse esperan algo, ya sea bueno o malo
     .subscribe(
       (responseOk)=>{
         //esto equivale a "estoy recibiendo agua y esta todo ok" que sería el next()
       },
       (responseFail)=>{
         //esto equivale a "no estoy recibiendo agua por cualquier motivo" que sería el error()
       }
     )*/




  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }




  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentageFromX)
  }
}
