import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() eventMostrarMenu = new EventEmitter();

  

  ngOnInit() {}

  public mostrarOpciones(){

  
    this.eventMostrarMenu.emit(true);
  
  }

}
