import { Component } from '@angular/core';
import {AdventureHourService} from '../providers/adventure-hour.service';
import {AHPeople} from '../interfaces/a-hpeople'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public AhData:AHPeople[]=[];

  constructor(
    public aHService: AdventureHourService
  ) {

  }


  public mostrarMenu(e){
    console.log(e);
  }

  public async getDataAt(){

    let resp:AHPeople[]|boolean;
    
      await this.aHService.getData()
      .then((res:AHPeople[])=>{
        
        resp=res;
      })
      .catch((err:boolean)=>{
        resp=err;
      })
      
      if(typeof(resp) == 'boolean'){
        console.log("se presentó un error")
      }else{
        this.AhData=resp;
        console.log(this.AhData.length)
      }
   
    //this.aHService.getLocalData();
    
  }


}
