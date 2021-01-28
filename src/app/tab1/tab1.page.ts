import { Component } from '@angular/core';
import {RickMortyService} from './../providers/rick-morty.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public urlImage= "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  public personajes:any;
  constructor(
    private rickMortyService:RickMortyService

  ) {}

  public mostrarMenu(e){
    console.log(e);
  }


  public getRickData(){

    this.rickMortyService.get("1,2,3,4,5,6,7,8,9,10").subscribe( res =>{
       this.personajes=  res;
      console.log(this.personajes.length)
      console.log(res)
    }, err=>{
      console.log(err)
    })

  }

  public eventoPersonaje(e){
    console.log(e)
  }

}
