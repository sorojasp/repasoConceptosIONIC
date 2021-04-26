import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {Platform} from '@ionic/angular';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  private statusLight:Boolean=false;

  constructor(private barcodeScanner: BarcodeScanner, 
    private platform: Platform,
    private flashlight: Flashlight) { }

  ngOnInit() {
  }

  public escanear(){

    if(this.platform.is('hybrid')){
      this.barcodeScanner.scan().then(barcodeData => {
        console.log(`Barcode text*: ${barcodeData.text} - Barcode format*: ${barcodeData.format}`);
       }).catch(err => {
        console.log(`Barcode error*: ${err}`);
       });

    }else{

      console.log("no esta en hibrido")
    }
    
  }

  public switchLinterna(){

    if(this.statusLight==false){
      this.flashlight.switchOn()
      this.statusLight=true;
    }else{
      this.flashlight.switchOff();
      this.statusLight=false;
    }

    

  }

}
