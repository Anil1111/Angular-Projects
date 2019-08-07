import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  //PRIMERA FORMA
  // transform(value: string, activar: boolean = true): any {
  //   if (activar) {
  //     let salida: string = "";
  //     for (let i = 0; i < value.length; i++) {
  //       salida += "*";
  //     }
  //     return salida;
  //   } else {
  //     return value;
  //   }
  // }

  //SEGUNDA FORMA

  transform(value: any, activar: boolean = true): string {
    return activar ? value.replace(/./gi, '*') : value;
  }

  //TERCERA FORMA
  // transform(value: string, activar: boolean = true): any {
  //   if (activar) {
  //     value = value.replace(/./gi, '*');
  //   }
  //   return value;
  // }


  //CUARTA FORMA
  // transform(value: string, hide: boolean): string {
  //   if (hide) {
  //       return value.split('').fill('*').join('');
  //   }
  //   return value;
  // }
}
