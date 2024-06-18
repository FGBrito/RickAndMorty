import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { RickandmortyapiService } from '../../../@api/services/rickandmortyapi';
import { RootObject, Result } from '../../../share/model/types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {

  constructor(
    private readonly service: RickandmortyapiService
  ) { }


  public data: Result[] = [];
  searchTerm: string = '';
  searchSubject: Subject<string> = new Subject<string>();

  private loadPosts(filter?: string): void {
    this.service
      .getCharacters({name:filter})
      .subscribe(
        (response: RootObject) => {
          this.data = response.results;
        },
        error => {
          console.log('error', error);
          this.data = [];
        }
      )
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
