import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes

  ],
  imports: [ //TODO: Solo se importan otros modules
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    CookieService
  ],
})
export class AppModule { }