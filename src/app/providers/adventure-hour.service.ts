import { Injectable } from '@angular/core';
import {AHPeople} from '../interfaces/a-hpeople';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdventureHourService {

  public url = "https://adventuretimeapi.herokuapp.com";

  constructor(
    public httpClient: HttpClient
  ) { }


  public getData():Promise<AHPeople[]|boolean> {

    return new Promise((resolve, reject) =>{

      this.httpClient.get(`${this.url}/people`).subscribe((resp:AHPeople[])=>{
        resolve (resp);
       
      },err=>{

        console.log(err);
        reject(false);
        
  
      })


    })



  }



  public  getLocalData():AHPeople[]{

    return [
      {
          "name": "Finn",
          "fullname": "Finn Mertens",
          "gender": "Male",
          "id": "r6Je",
          "url": "https://adventuretimeapi.herokuapp.com/people/r6Je"
      },
      {
          "name": "Jake",
          "fullname": "Jake the Dog",
          "gender": "Male",
          "id": "53YK",
          "url": "https://adventuretimeapi.herokuapp.com/people/53YK"
      },
      {
          "name": "BMO",
          "fullname": "BMO",
          "gender": "N/A",
          "id": "eLd7",
          "url": "https://adventuretimeapi.herokuapp.com/people/eLd7"
      },
      {
          "name": "Princess Bubblegum",
          "fullname": "Bonnibel Bubblegum",
          "gender": "Female",
          "id": "p3kM",
          "url": "https://adventuretimeapi.herokuapp.com/people/p3kM"
      },
      {
          "name": "Ice King",
          "fullname": "Simon Petrikov",
          "gender": "Male",
          "id": "Lz2b",
          "url": "https://adventuretimeapi.herokuapp.com/people/Lz2b"
      },
      {
          "name": "Lumpy Space Princess",
          "fullname": "Lumpy Space Princess",
          "gender": "Female",
          "id": "oy0K",
          "url": "https://adventuretimeapi.herokuapp.com/people/oy0K"
      },
      {
          "name": "Lady Rainicorn",
          "fullname": "Lady Rainicorn",
          "gender": "Female",
          "id": "4jXl",
          "url": "https://adventuretimeapi.herokuapp.com/people/4jXl"
      },
      {
          "name": "Marceline",
          "fullname": "Marceline Abadeer",
          "gender": "Female",
          "id": "xAMz",
          "url": "https://adventuretimeapi.herokuapp.com/people/xAMz"
      },
      {
          "name": "Flame King",
          "fullname": "Flame King",
          "gender": "Male",
          "id": "Bk4N",
          "url": "https://adventuretimeapi.herokuapp.com/people/Bk4N"
      },
      {
          "name": "Flame Princess",
          "fullname": "Phoebe",
          "gender": "Female",
          "id": "mVq1",
          "url": "https://adventuretimeapi.herokuapp.com/people/mVq1"
      },
      {
          "name": "Fire Wolves",
          "fullname": "Fire Wolves",
          "gender": "N/A",
          "id": "2Qyp",
          "url": "https://adventuretimeapi.herokuapp.com/people/2Qyp"
      },
      {
          "name": "Flambo",
          "fullname": "Flambo",
          "gender": "Male",
          "id": "1yJP",
          "url": "https://adventuretimeapi.herokuapp.com/people/1yJP"
      },
      {
          "name": "Cinnamon Bun",
          "fullname": "Cinnamon Bun",
          "gender": "Male",
          "id": "3Bwx",
          "url": "https://adventuretimeapi.herokuapp.com/people/3Bwx"
      },
      {
          "name": "Neptr",
          "fullname": "Never Ending Pie Throwing Robot",
          "gender": "N/A",
          "id": "XBKJ",
          "url": "https://adventuretimeapi.herokuapp.com/people/XBKJ"
      },
      {
          "name": "Ash",
          "fullname": "Ash",
          "gender": "Male",
          "id": "8RlJ",
          "url": "https://adventuretimeapi.herokuapp.com/people/8RlJ"
      },
      {
          "name": "Lorraine",
          "fullname": "Lorraine",
          "gender": "Female",
          "id": "RP5w",
          "url": "https://adventuretimeapi.herokuapp.com/people/RP5w"
      },
      {
          "name": "CMO",
          "fullname": "CMO",
          "gender": "N/A",
          "id": "arPo",
          "url": "https://adventuretimeapi.herokuapp.com/people/arPo"
      },
      {
          "name": "Sea Lard",
          "fullname": "Sea Lard",
          "gender": "N/A",
          "id": "wQW3",
          "url": "https://adventuretimeapi.herokuapp.com/people/wQW3"
      },
      {
          "name": "Shelby",
          "fullname": "Shelby Butterson",
          "gender": "Male",
          "id": "W04g",
          "url": "https://adventuretimeapi.herokuapp.com/people/W04g"
      },
      {
          "name": "Lionel",
          "fullname": "Lionel",
          "gender": "Male",
          "id": "VPoe",
          "url": "https://adventuretimeapi.herokuapp.com/people/VPoe"
      },
      {
          "name": "Fern",
          "fullname": "Fern",
          "gender": "Male",
          "id": "q3aW",
          "url": "https://adventuretimeapi.herokuapp.com/people/q3aW"
      },
      {
          "name": "Hunson Abadeer",
          "fullname": "Hunson Abadeer",
          "gender": "Male",
          "id": "JA35",
          "url": "https://adventuretimeapi.herokuapp.com/people/JA35"
      },
      {
          "name": "Gunter",
          "fullname": "Gunter",
          "gender": "Male",
          "id": "DkQg",
          "url": "https://adventuretimeapi.herokuapp.com/people/DkQg"
      },
      {
          "name": "Snow Golem",
          "fullname": "Snow Golem",
          "gender": "Male",
          "id": "OPVn",
          "url": "https://adventuretimeapi.herokuapp.com/people/OPVn"
      },
      {
          "name": "Iceclops",
          "fullname": "Iceclops",
          "gender": "Male",
          "id": "73J4",
          "url": "https://adventuretimeapi.herokuapp.com/people/73J4"
      }
  ]
  }

}
