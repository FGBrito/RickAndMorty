import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FavoritedModule } from '../../share/components/favorited/favorited.module';


@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FavoritedModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule { }
