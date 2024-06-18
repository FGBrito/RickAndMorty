import { Observable } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FavoritedService } from '../../../@api/services/favorited/favorited.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  rota='/';
  favoriteCount: number = 0;
  constructor(
    private router: Router,
    private favoritesService: FavoritedService,
    private cdRef: ChangeDetectorRef
  ) { 
    this.router.events.subscribe((res)=>{
      if (res instanceof NavigationEnd) {
        this.rota = res.url;
      }
    })
  }

  ngOnInit() {
    this.favoritesService.favorites$.subscribe(count => {
      this.favoriteCount = count.length;
    });
  }

}
