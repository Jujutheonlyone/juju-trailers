import { Injectable } from '@angular/core';
import {Schema} from "../../../../amplify/data/resource";
import { generateClient } from 'aws-amplify/data'
import { V6Client } from '@aws-amplify/api-graphql';


@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private client: V6Client<Schema> = generateClient<Schema>();

  public async addVehicles(): Promise<any> {
    try{
      const res = await this.client.models.Vehicle.create({
        vehicleId: '1',
        status: 'available',
        plate: 'ABC123',
        name: 'Explorer Trailer',
        brand: 'AdventureCo',
        location: {
          lat: 37.7749,
          long: -122.4194,
        },
        emptyWeight: 750,
        grossWeight: 1500,
        description: 'A reliable Trailer for ...',
        active: false
      });
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.addVehicles', e);
      throw (e);
    }
  }

  public async getVehicleList(): Promise<Schema['Vehicle']['type'][]> {
    try {
      const res = await this.client.models.Vehicle.list();
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.getVehicleList', e);
      throw (e);
    }
  }

  public async getVehicleById(vehicleId: string): Promise<void> {
    try {
      const res = await this.client.models.Vehicle.get({vehicleId});
      console.log(res)
    } catch (e) {
      console.error('Error on VehicleService.getVehicleById', e);
      throw (e);
    }
  }

  public async updateVehicle(vehicle: any): Promise<any> {
    try {
      const res = await this.client.models.Vehicle.update(vehicle);
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.updateVehicle', e);
      throw (e);
    }
  }

  public async deleteVehicle(vehicleId: string): Promise<any> {
    try{
      const res = await this.client.models.Vehicle.delete({vehicleId});
      return res.data;
    } catch (e) {
      console.error('Error on VehicleService.deleteVehicle', e);
      throw (e);
    }
  }
}
