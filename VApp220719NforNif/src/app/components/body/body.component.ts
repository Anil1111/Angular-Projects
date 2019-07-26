import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html' 
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Un Gran poder requiere una gran personalidad',
        autor: 'Ben Parker'
    };
    
    personajes: string[] = ['Spiderman', 'vemom', 'Dr. Octopus'];

}