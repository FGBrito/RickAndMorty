import { Component, OnInit } from '@angular/core';
import { FavoritedService } from '../../@api/services/favorited/favorited.service';
import { Result } from '../../share/model/types';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent  implements OnInit{
  public data: Result[] = [];

  constructor(
    private favoritesService: FavoritedService,
  ) { }

  ngOnInit() {
    this.favoritesService.favorites$.subscribe(count => {
      this.data = count;
    });
  }
}
