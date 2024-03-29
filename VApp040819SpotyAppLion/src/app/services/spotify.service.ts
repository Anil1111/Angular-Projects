import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCWSHc5cd_AjEbq95Me21Zjt9PRiTFOpCT6TzFwIC1CjEqvpipjNfa1D8wBeGEPiNxjwy1TZR4X9ybioaE'
    });
    return this.http.get(url, { headers })
  }

  //FORMA OPTIMIZADA
  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));    
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);

      // .pipe(map(data => data['artists'].items));    
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map(data => data['tracks']))
  }



// PRIMERA FORMA

  // getNewRealeases() {
  //    const headers = new HttpHeaders({
  //      'Authorization': 'Bearer BQDAfqaDrO967ZkJJYlmfIonvXfpyrbKIcLavZBxdFlJ6wmBTqbMlzACTKyoWbx5MFyrM_j90ml0DqWlPPQ'
  //    });

  //    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
  //      .pipe(map(data => {
  //        return data['albums'].items;
  //      }));
  // }

  // getArtista(termino: string) {   
  //    const headers = new HttpHeaders({
  //      'Authorization': 'Bearer BQDAfqaDrO967ZkJJYlmfIonvXfpyrbKIcLavZBxdFlJ6wmBTqbMlzACTKyoWbx5MFyrM_j90ml0DqWlPPQ'
  //    });

  //    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
  //      .pipe(map(data => data['artists'].items));

  // }

}
