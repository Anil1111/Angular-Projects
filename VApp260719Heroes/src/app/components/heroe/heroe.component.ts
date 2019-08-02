import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
  
})
export class HeroeComponent{


  heroe: any = {};

  constructor( private activateRouter: ActivatedRoute,
               private _heroeService: HeroesService
    ) { 
    this.activateRouter.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe(params['id']);      
    })
  }
}
