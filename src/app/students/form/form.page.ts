import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {


  public name:string;
  public lastName:string;

  constructor(
    private activeRoute:ActivatedRoute
  ) { 
    this.name = this.activeRoute.snapshot.paramMap.get('name');
    this.lastName= this.activeRoute.snapshot.paramMap.get('lastName');
    
    console.log(this.activeRoute.snapshot.paramMap.get('name'));
    console.log(this.activeRoute.snapshot.paramMap.get('lastName'));
  }

  ngOnInit() {
  }

}
