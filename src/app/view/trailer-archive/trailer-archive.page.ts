import {Component, OnInit} from '@angular/core';
import {image} from "ionicons/icons";
import {VehicleService} from "../../core/service/vehicle.service";
import {SwiperOptions} from "swiper/types";

export interface Card {
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-trailer-archive',
  templateUrl: './trailer-archive.page.html',
  styleUrls: ['./trailer-archive.page.scss'],
})
export class TrailerArchivePage implements OnInit {

  public contents: Card[] = [
    {
      title: 'Computer',
      description: 'Description about computer...',
      url: 'https://picsum.photos/id/1/640/480',
    },
    {
      title: 'Building',
      description: 'Building description...',
      url: 'https://picsum.photos/id/101/640/480',
    }, {
      title: 'Glass over a computer',
      description: 'Description of a glass over a computer',
      url: 'https://picsum.photos/id/201/640/480',
    }, {
      title: 'Autumn',
      description: 'Description about autumn leaves',
      url: 'https://picsum.photos/id/301/640/480',
    }, {
      title: 'Balloon',
      description: 'Coloured balloon',
      url: 'https://picsum.photos/id/401/640/480',
    },
  ];


  public index = 0;

  public swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
    loop: true,
  }

  public swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
  }

  ngAfterViewInit() {

  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }

  public onSwiper([swiper]: any): void {
    console.log(swiper);
  }

  public onSlideChange(): void {
    console.log('slide change');
  }

  constructor(private readonly vehicleService: VehicleService) {}

  public ngOnInit(): void {
    this.loadVehicles();
  }

  private loadVehicles(): void {
  }

  protected readonly image = image;
}
