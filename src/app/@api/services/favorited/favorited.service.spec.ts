import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Result } from '../../../share/model/types';

import { FavoritedService } from './favorited.service';

describe('FavoritedService', () => {
  let service: FavoritedService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importe HttpClientModule aqui
      providers: [
        FavoritedService,
        { provide: PLATFORM_ID, useValue: 'browser' } // Simula o ambiente de browser para os testes
      ]
    });
    service = TestBed.inject(FavoritedService);
    httpMock = TestBed.inject(HttpTestingController); // Inicializa o HttpTestingController
    localStorage.clear(); // Limpa o localStorage antes de cada teste
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to favorites', () => {
    const item: Result = {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    }
    
    service.addFavorite(item);

    service.favorites$.subscribe(favorites => {
      expect(favorites.length).toBe(1);
    });
  });

  it('should remove item from favorites', () => {
    const item1: Result = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    }
    const item2: Result = {
      "id": 2,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    }

    service.addFavorite(item1);
    service.addFavorite(item2);

    service.removeFavorite(item1);

    service.favorites$.subscribe(favorites => {
      expect(favorites.length).toBe(1);
      expect(favorites[0].id).toBe(item2.id);
    });

    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    expect(storedFavorites.length).toBe(1);
    expect(storedFavorites[0].id).toBe(item2.id);
  });

});
