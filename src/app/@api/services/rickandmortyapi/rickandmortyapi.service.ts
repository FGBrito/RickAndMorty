import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterFilter, RootObject } from '../../../share/model/types'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  constructor( private readonly http: HttpClient ) { }

  public baseUrl = environment.APIEndpoint;

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
