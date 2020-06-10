import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getPersonajes() {
    const url = `${environment.urlbase}${environment.endpoints.characters}`;
    this.http.get(url).subscribe(
      obj => {
        console.log('RESULTADO: ', obj);
      }
    )
    
  }
}
