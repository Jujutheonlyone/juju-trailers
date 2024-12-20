import {Injectable} from '@angular/core';
import {Schema} from "../../../../amplify/data/resource";
import {DbService} from "./db.service";


@Injectable({
  providedIn: 'root',
})
export class VehicleSvc {
  constructor(private dbService: DbService) {}

  public async addVehicles(): Promise<any> {
    try{
      const res = await this.dbService.dbClient.models.Vehicle.create(  {
        vehicleId: '3',
        plate: 'GHI789',
        name: 'Camper Deluxe',
        brand: 'TrailHaven',
        description: 'Luxurious camper trailer for family trips.',
        active: true,
        status: 'blocked',
        lockStatus: 'error',
        location: {
          lat: 34.0522,
          long: -118.2437,
        },
        emptyWeight: 1200,
        grossWeight: 2500,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        vehicleType: 'trailer',
      });
      console.log(res);
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.addVehicles', e);
      throw (e);
    }
  }

  public async getVehicleList(): Promise<Schema['Vehicle']['type'][]> {
    try {
      const res = await this.dbService.dbClient.models.Vehicle.list({limit: 10});
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.getVehicleList', e);
      throw (e);
    }
  }

  public async getVehicleById(vehicleId: string): Promise<void> {
    try {
      const res = await this.dbService.dbClient.models.Vehicle.get({vehicleId});
      console.log(res)
    } catch (e) {
      console.error('Error on VehicleService.getVehicleById', e);
      throw (e);
    }
  }

  public async updateVehicle(vehicle: any): Promise<any> {
    try {
      const res = await this.dbService.dbClient.models.Vehicle.update(vehicle);
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.updateVehicle', e);
      throw (e);
    }
  }

  public async deleteVehicle(vehicleId: string): Promise<any> {
    try{
      const res = await this.dbService.dbClient.models.Vehicle.delete({vehicleId});
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.deleteVehicle', e);
      throw (e);
    }
  }
}
