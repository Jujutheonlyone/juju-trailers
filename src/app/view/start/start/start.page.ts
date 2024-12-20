import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../core/service/vehicle.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {

  constructor(public vehicleSvc: VehicleService) { }
}
