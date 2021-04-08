import { Component, OnInit } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private toast: Toast) { }

  ngOnInit() {
  }

  public showToast(){
    this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }





}
