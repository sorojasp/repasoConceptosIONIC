import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {

  public name:string="Stiven Rojas";
  public icon:string="person-outline";
  constructor() { }

  ngOnInit() {}

  public eventHandler(e){
    console.log(e);
    this.name="Frank Sheran";
    this.icon="accessibility-outline";


  }

}
