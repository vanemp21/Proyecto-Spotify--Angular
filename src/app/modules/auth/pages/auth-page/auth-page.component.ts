import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  errorSesion:boolean = false
  formLogin: FormGroup = new FormGroup({});
  //debe ser tipo authservice que es (correo) string|number y (password) string|number
  constructor( private authService:AuthService, private cookie: CookieService) { } //inyectando el servicio de cookie
  ngOnInit(): void {
    //declaramos el formulario y le decimos que va a tener un email y un password
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.required, //el campo debe ser obligatorio
        Validators.email //usa el regx de email
      ]), //así es como se va a inicializar
      //si quiero cambiar el estilo puedo con la clase ng-invalid y la de ng-touched es por si antes ha tocado el input
      //para que no aparezca en rojo de primeras o ng-valid para el valido
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }
  //con esto enviamos los datos del formulario al servicio de sendCredentials
  //de esta manera podemos pasar datos de un lado a otra sin importar su jerarquía
sendLogin():void{
  //pilla el email y pass del formulario del html
  const {email,password} = this.formLogin.value
  this.authService.sendCredentials(email,password)
  .subscribe(responseOk => { //Aqui entra cuando el pass y correo sea correcto
    console.log('Sesión iniciada correctamente', responseOk)
    const {tokenSession, data} = responseOk
    this.cookie.set('token', tokenSession ,4 ,'/') //el cookie necesita un string y la ruta (el numero opcional que son los dias de expiracion)
  }, err =>{
    console.log('Error con tus datos de inicio de sesión')
    this.errorSesion = true;
  })
}
}
