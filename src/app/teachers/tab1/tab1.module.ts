import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';
import { Toast } from '@ionic-native/toast/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  providers:[Toast]

})
export class Tab1PageModule {}
