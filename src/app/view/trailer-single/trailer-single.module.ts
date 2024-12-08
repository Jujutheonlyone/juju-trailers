import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrailerSinglePageRoutingModule } from './trailer-single-routing.module';

import { TrailerSinglePage } from './trailer-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrailerSinglePageRoutingModule
  ],
  declarations: [TrailerSinglePage]
})
export class TrailerSinglePageModule {}
