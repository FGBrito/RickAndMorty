import { FavoritedModule } from './../../share/components/favorited/favorited.module';
import { RickandmortyapiModule } from './../../@api/services/rickandmortyapi/rickandmortyapi.module';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RickandmortyapiModule,
    MatCardModule,
    ScrollingModule,
    MatInputModule,
    MatFormFieldModule,
    FavoritedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
