import { Routes } from '@angular/router';


export const routes: Routes = [
{
    path:'',
    //path: 'home', //esto seria /home
    //path: ':username/:other' puedes mandar parametros
    loadChildren: ()=> import(`./modules/home/home.module`).then(m => m.HomeModule)
}
];
