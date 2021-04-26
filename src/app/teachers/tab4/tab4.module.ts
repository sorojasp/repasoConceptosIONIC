import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page], 
  providers:[BarcodeScanner, Flashlight]
})
export class Tab4PageModule {}
