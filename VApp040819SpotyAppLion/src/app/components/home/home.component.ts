import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading:boolean;

  constructor(private spotify: SpotifyService) {
    this.loading=true;
    this.spotify.getNewRealeases()
    .subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading=false;
      });
  }
}