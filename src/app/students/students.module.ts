import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentsComponent} from './students.component'
import {StudentsRoutingModule} from './students-routing.module';

import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule, 
    StudentsRoutingModule, 
    IonicModule,
  ]
})
export class StudentsModule { }
