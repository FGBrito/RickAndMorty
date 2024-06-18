import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharacterFilter, RootObject } from '../../../share/model/types';

import { RickandmortyapiService } from '../rickandmortyapi/rickandmortyapi.service';

describe('RickandmortyapiService', () => {
  let service: RickandmortyapiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RickandmortyapiService]
    });

    service = TestBed.inject(RickandmortyapiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters without filters', () => {
    const mockResponse: RootObject = {
      info: {
        count: 2,
        pages: 1,
        next: '',
        prev: ''
      },
      results: [
        {
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
        },
      ]
    };

    service.getCharacters().subscribe((data: RootObject) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.baseUrl}character`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get characters with filters', () => {
    const filters: CharacterFilter = {
      name: 'Rick'
    };

    const mockResponse: RootObject = {
      info: {
        count: 1,
        pages: 1,
        next: '',
        prev: ''
      },
      results: [
        {
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
        },
      ]
    };

    service.getCharacters(filters).subscribe((data: RootObject) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.baseUrl}character/?name=${filters.name}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
