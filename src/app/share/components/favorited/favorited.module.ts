import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritedComponent } from './favorited.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FavoritedComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
  ],
  exports: [
    FavoritedComponent
  ]
})
export class FavoritedModule { }
