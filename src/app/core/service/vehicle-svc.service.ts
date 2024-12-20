import {Injectable} from '@angular/core';
import {Schema} from "../../../../amplify/data/resource";
import {dbClient} from "../../../main";


@Injectable({
  providedIn: 'root',
})
export class VehicleSvc {

  public async addVehicles(): Promise<any> {
    try{
      const res = await dbClient.models.Vehicle.create(  {
        vehicleId: '2',
        plate: 'DEF456',
        name: 'CargoMate XL',
        brand: 'CargoMaster',
        description: 'Heavy-duty trailer ideal for long hauls.',
        active: true,
        status: 'rented',
        lockStatus: 'unlocked',
        location: {
          lat: 40.7128,
          long: -74.0060,
        },
        emptyWeight: 1000,
        grossWeight: 2000,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
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
      const res = await dbClient.models.Vehicle.list();
      console.log(res);
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.getVehicleList', e);
      throw (e);
    }
  }

  public async getVehicleById(vehicleId: string): Promise<void> {
    try {
      const res = await dbClient.models.Vehicle.get({vehicleId});
      console.log(res)
    } catch (e) {
      console.error('Error on VehicleService.getVehicleById', e);
      throw (e);
    }
  }

  public async updateVehicle(vehicle: any): Promise<any> {
    try {
      const res = await dbClient.models.Vehicle.update(vehicle);
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.updateVehicle', e);
      throw (e);
    }
  }

  public async deleteVehicle(vehicleId: string): Promise<any> {
    try{
      const res = await dbClient.models.Vehicle.delete({vehicleId});
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.deleteVehicle', e);
      throw (e);
    }
  }
}
