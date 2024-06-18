import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritedModule } from './../../share/components/favorited/favorited.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { FavoriteComponent } from './favorite.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoritedService } from '../../@api/services/favorited/favorited.service';
import { Result } from '../../share/model/types';
import { BehaviorSubject } from 'rxjs';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;
  let mockFavoritedService: jasmine.SpyObj<FavoritedService>;
  let favoritesSubject: BehaviorSubject<Result[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteComponent],
      imports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        FavoritedModule,
        FavoriteRoutingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: FavoritedService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
