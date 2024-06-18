import { Observable, of, combineLatest } from 'rxjs';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FavoritedService } from './../../../@api/services/favorited/favorited.service';
import { Result } from '../../model/types';

@Component({
  selector: 'favorited',
  templateUrl: './favorited.component.html',
  styleUrl: './favorited.component.scss'
})
export class FavoritedComponent {
  @Input() item: Result = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {name: '', url: ''},
    location: {name: '',url: ''},
    image: '',
    episode: [''],
    url: '',
    created: '',
    isFavorite: false,
    
  };
  isFavorite$: Observable<boolean>;

  favoriteCount: number = 0;

  constructor(private favoritesService: FavoritedService) {
    this.isFavorite$ = this.favoritesService.isFavorite(this.item);
  }

  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe(addedItem => {
      addedItem && addedItem.map((item)=>{
        if(item.id === this.item.id){
          this.item.isFavorite=true
        }
      })
    });
  }

  toggleFavorite(item: any) {
    item.isFavorite = !item.isFavorite;
    if (!item.isFavorite) {
      this.favoritesService.removeFavorite(item);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }
}
