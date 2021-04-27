import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatauploudPageRoutingModule } from './datauploud-routing.module';

import { DatauploudPage } from './datauploud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatauploudPageRoutingModule
  ],
  declarations: [DatauploudPage]
})
export class DatauploudPageModule {}
