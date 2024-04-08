import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
/*-----------------ANOTACIÓN----------------*/
/*Aquí es donde vamos a manejar las rutas a partir de /auth*/
/*-------------------------------------------*/
const routes: Routes = [
  //tanto auth/login como /auth/login iran a la pagina del componente auth-page
  { path: 'auth/login', component: AuthPageComponent },
  { path: 'auth', redirectTo: 'auth/login' }, // Redirecciona cualquier ruta no definida a auth/login
  { path: 'login', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
