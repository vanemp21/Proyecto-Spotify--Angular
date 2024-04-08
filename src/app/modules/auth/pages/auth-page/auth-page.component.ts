import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  constructor() { }
  ngOnInit(): void {
    //declaramos el formulario y le decimos que va a tener un email y un password
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.required, //el campo debe ser obligatorio
        Validators.email //usa el regx de email
      ]), //así es como se va a inicializar
      //si quiero cambiar el estilo puedo con la clase ng-invalid
      password: new FormControl('',[
        Validators.required,
      ])
    });
  }

}
