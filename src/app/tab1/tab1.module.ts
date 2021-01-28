import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {HeaderModule} from './../shared/components/header/header.module'

import {CardRickModule} from './../shared/components/card-rick/card-rick.module'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HeaderModule,
    CardRickModule

  ],
  declarations: [Tab1Page],
  //providers:[RickMortyService, HttpClient]
  
})
export class Tab1PageModule {}
