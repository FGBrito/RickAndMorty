import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, tap } from 'rxjs';
import { RickandmortyapiService } from '../../../@api/services/rickandmortyapi';
import { RootObject, Result } from '../../../share/model/types';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  items: Result[] = [];
  page = '';
  limit = 20;
  loading = false;
  searchTerm: string = '';
  searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private readonly service: RickandmortyapiService
  ) { }

  private loadPosts(filter?: string, pages?: string): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.service
      .getCharacters({name:filter}, pages)
      .pipe(
        tap( (response : RootObject) => {
          if (response.info.next) {
            this.page = response.info.next.split('?')[1]; 
            this.items = [...this.items, ...response.results];
          } else {
            this.items = response.results;
          }
          this.loading = false;
        }, error => {
          console.log('error', error);
          this.items = [];
        })
      )
      .subscribe();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.loadPosts(undefined,this.page);
    }
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
    this.searchSubject.next(value);
  }

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(1000), 
      distinctUntilChanged() 
    ).subscribe((term: string) => {
      this.loadPosts(term);
    });
    this.loadPosts();
  }
}
