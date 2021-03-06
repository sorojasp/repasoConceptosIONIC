import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private router: Router
  ) {}

  public mostrarMenu(e){
    console.log(e);
  }

  public goLogin(){
    this.router.navigate(['../student/form', {
      name: true,
      lastName:"Rojas"

    }]
      
    );

  }

  public goToTeachers(){
    this.router.navigate(['../teachers'])
  }


}
