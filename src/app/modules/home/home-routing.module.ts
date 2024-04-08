import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

 /*-----------------ANOTACIÓN----------------*/
 /* path:'dashboard', <-- esto seria /home/dashboard si en app.routes.ts has definido /home como padre*/
 /*-------------------------------------------*/
  /* component: HomePageComponent*/
 {
  path:'tracks',
  loadChildren: () => import('@modules/track/track.module').then(m => m.TrackModule)
 },
 {
  path: 'favorites',
  loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
 },
 {
  path:'history',
  loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
 },
 {
  /*-----------------ANOTACIÓN----------------*/
  /* Cuando no encuentra la ruta lo redirecciona a tracks*/
  /*-------------------------------------------*/
  path: '**',
  redirectTo: '/auth/login'
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
