import { Component } from '@angular/core';
import {RickMortyService} from './../providers/rick-morty.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tittle="API Rick y Morty"
  public urlImage= "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  public personajes:any;
  public icon="business-outline"
  public color="primary"
  public name:string;
  public mostrarFormulario=true;
  public showContent:boolean=true

  public relationships=[{tipo:"Conmigo mismo", puntaje:5},{tipo:"Graduandome", puntaje:8}, {tipo:"Relación seria", puntaje:9},{tipo: "Un parche", puntaje:9}]



  constructor(
    private rickMortyService:RickMortyService,
    private toastController: ToastController

  ) {}

  public mostrarMenu(e){
    console.log(e);
  }


  public getRickData(){

    this.mostrarFormulario=false;

    this.icon="person-circle-outline";
    this.color="danger"

    this.presentToast("Consume servicio Rick y Morty")

    this.rickMortyService.get("1,2,3,4,5,6,7,8,9,10").subscribe( res =>{
       this.personajes=  res;
      console.log(this.personajes.length)
      console.log(res)
    }, err=>{
      console.log(err)
    })

    this.showContent=false;

  }

  public eventoPersonaje(e){
    console.log(e)
  }

  public catchOnRelationship(e){
    console.log(e['detail']['checked'])

  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1300,
      color:'success',
      cssClass:'toastStyle'
    });
    toast.present();
  }

  public showDiv(){

    this.showContent=true;
  }

}
