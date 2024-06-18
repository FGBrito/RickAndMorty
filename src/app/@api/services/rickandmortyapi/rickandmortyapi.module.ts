import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickandmortyapiService } from './rickandmortyapi.service';



@NgModule({
  declarations: [],
  providers: [
    RickandmortyapiService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class RickandmortyapiModule { }
