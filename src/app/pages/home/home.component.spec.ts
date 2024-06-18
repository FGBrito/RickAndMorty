import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RickandmortyapiModule } from '../../@api/services/rickandmortyapi';
import { FavoritedModule } from '../../share/components/favorited/favorited.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { PostsComponent } from './posts/posts.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, PostsComponent],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        RickandmortyapiModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        FavoritedModule,
        HomeRoutingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
