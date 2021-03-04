import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string="";
  public enableButton=false;
  public password: string="";

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  public logear(){
    this.router.navigate(['../tabs'])
  }

  public obtenerEmail(e){
    
     this.email = e.detail.value;
     this.habilitarButton();
  }

  public obtenerPassword(e){

    this.password = e.detail.value;
    this.habilitarButton();
  
  }


  public habilitarButton(){
    

    if(this.email.length >=8 && this.password.length >=8){
      this.enableButton=true;
    }

    console.log(this.enableButton)

  
  }

}
