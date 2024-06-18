import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from '../../../share/model/types';

@Injectable({
  providedIn: 'root'
})
export class FavoritedService {
  public favoritesSubject = new BehaviorSubject<Result[]>([]);
  favorites$: Observable<Result[]> = this.favoritesSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const storedFavorites = this.getStoredFavorites();
    if (storedFavorites) {
      this.favoritesSubject.next(JSON.parse(storedFavorites));
    }
  }

  addFavorite(item: Result) {
    const currentFavorites = this.favoritesSubject.value;
    if (!currentFavorites.includes(item)) {
      let updateCurrentFavorites = [...currentFavorites, item];
      this.favoritesSubject.next(updateCurrentFavorites);
      this.setStoredFavorites(updateCurrentFavorites);
    }
  }

  removeFavorite(item: Result) {
    const currentFavorites = this.favoritesSubject.value;
    const updatedFavorites = currentFavorites.filter(fav => fav.id !== item.id);
    this.favoritesSubject.next(updatedFavorites);
    this.setStoredFavorites(updatedFavorites);
  }

  isFavorite(item: Result): Observable<boolean> {
    return this.favorites$.pipe(
      map(favorites => favorites.includes(item))
    );
  }

  private getStoredFavorites(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('favorites');
    }
    return null;
  }

  private setStoredFavorites(favorites: Result[]) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
