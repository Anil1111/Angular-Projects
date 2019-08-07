import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Roslin';
  nombre2 = 'leoN maTIas roslin';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  a: number = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "volvrine",
    clave: "Logan",
    edad: 500,
    direccion: {
      calle: "primera",
      casa: "19"
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la data'), 3500);
  });

  fecha = new Date();

  video = "Hyj_CrvS5-o";


}
