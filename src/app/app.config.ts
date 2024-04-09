// app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes'; // Importa AppRoutingModule y las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Utiliza las rutas exportadas de AppRoutingModule
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
};
