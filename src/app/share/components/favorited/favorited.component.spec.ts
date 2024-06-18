import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedComponent } from './favorited.component';

describe('FavoritedComponent', () => {
  let component: FavoritedComponent;
  let fixture: ComponentFixture<FavoritedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritedComponent],
      imports:[MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
