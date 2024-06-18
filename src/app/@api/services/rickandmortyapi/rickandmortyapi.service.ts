import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CharacterFilter, RootObject } from '../../../share/model/types'

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  constructor( private readonly http: HttpClient ) { }

  public baseUrl = 'https://rickandmortyapi.com/api/';

  public getCharacters(filters?: CharacterFilter ): Observable<RootObject> {
    let options = '';

    if (filters) {
      if (filters.name) {
        options = `/?name=${filters.name}`;
      }
    }
    return this.http.get<RootObject>(`${this.baseUrl}character${options}`);
  }
}
