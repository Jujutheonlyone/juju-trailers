import {Component, ElementRef, ViewChild} from '@angular/core';
import {VehicleSvc} from "../../../core/service/vehicle-svc.service";
import {AuthService} from "../../../core/service/auth.service";
import {Router} from "@angular/router";
import Swiper from "swiper";
import {TRAILER_LIST_MOCK} from "../../../core/const/mock/trailer-list.mock";
import {Schema} from "../../../../../amplify/data/resource";

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {
  @ViewChild('swiper')
  public swiperRef: ElementRef | undefined;
  private swiper?: Swiper;
  public vehicleList: Schema["Vehicle"]["type"][] = [];
  public selectedVehicle: Schema["Vehicle"]["type"] | null = null;

  public swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  public swiperSlideChanged(e: any) {
    const index = e.target.swiper.activeIndex
    this.selectedVehicle = this.vehicleList[index]
  }

  public _segmentSelected(index: number) {
    this.swiper?.slideTo(index)
  }

  constructor(
    public vehicleSvc: VehicleSvc,
    public authSvc: AuthService,
    public router: Router,
  ) {
    this.vehicleSvc.getVehicleList().then((vehicleList) => {
      this.vehicleList = vehicleList;
    })
    this.authSvc.$currentUser.subscribe((user) => {
      console.log('user', user);
      if(!user){
        //this.router.navigate(ROUTES.de.login)
      }
    })
  }
}
