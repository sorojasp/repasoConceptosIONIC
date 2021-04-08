import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
