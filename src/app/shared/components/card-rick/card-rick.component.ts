import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-rick',
  templateUrl: './card-rick.component.html',
  styleUrls: ['./card-rick.component.scss'],
})
export class CardRickComponent implements OnInit {

  @Input() nombre:string;
  @Input() genero:string;
  @Input() origen:string;
  @Input() status:string;
  @Input() specie:string;
  @Input() imagen:string;


  constructor() { }

  ngOnInit() {}

}
