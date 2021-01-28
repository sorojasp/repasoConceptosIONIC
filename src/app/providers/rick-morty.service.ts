import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  


  constructor(
    private httpClient: HttpClient
  ) { }


  public get(personajes: string) {
    return this.httpClient.get(`${environment.urlRickMorty}character/${personajes}/`)
  }




}
