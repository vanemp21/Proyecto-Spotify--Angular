import { Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

/*-----------------ANOTACIÓN----------------*/
/*Rutas principale
Es el <routing></routing> del app.component.html donde muestra todo
Las rutas que están aquí son los componentes que se van a actualizar por lo tanto romper */
/*-------------------------------------------*/
export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule),
      
    },
    {
        path: '',
        /*-----------------ANOTACIÓN----------------*/
        /*path: 'home', //esto seria /home el path principal*/
        /*path: ':username/:other' puedes mandar parametros*/
        /*Aqui lo que defino es la ruta de HomeModule
        que es la parte central que se va a actualizar y el homepage tiene
        definido dentro otras rutas*/
        /*-------------------------------------------*/
        component: HomePageComponent,
        loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
        canActivate: [SessionGuard]

    }

];
