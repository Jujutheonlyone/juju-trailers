import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrailerArchivePageRoutingModule } from './trailer-archive-routing.module';
import { TrailerArchivePage } from './trailer-archive.page';
import {SwiperModule} from "../../directive/swiper/swiper.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrailerArchivePageRoutingModule,
    SwiperModule,
  ],
  declarations: [TrailerArchivePage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TrailerArchivePageModule {}
