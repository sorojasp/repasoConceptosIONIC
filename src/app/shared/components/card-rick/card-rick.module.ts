import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardRickComponent} from './card-rick.component'


@NgModule({
  declarations: [CardRickComponent],
  imports: [
    CommonModule
  ],
  exports:[CardRickComponent]
})
export class CardRickModule { }
