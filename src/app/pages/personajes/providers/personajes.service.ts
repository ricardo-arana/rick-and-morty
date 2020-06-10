import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getPersonajes(page: string = '1') {
    const url = `${environment.urlbase}${environment.endpoints.characters}/?page=${page}`;
    return this.http.get<Character>(url);
  }
}
