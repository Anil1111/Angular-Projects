import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{
      
  heroes: any = {};
  termino: string;
  
  constructor(private activateRouter: ActivatedRoute,
    private _heroesService: HeroesService) { }
    
    ngOnInit() {       
      this.activateRouter.params.subscribe(params => {
        this.heroes= this._heroesService.buscarHerore(params['termino']);
        this.termino = params['termino'];
      })

    }

}
