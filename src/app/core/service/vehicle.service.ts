import { Injectable } from '@angular/core';
import {Schema} from "../../../../amplify/data/resource";
import { generateClient } from 'aws-amplify/data'
import { V6Client } from '@aws-amplify/api-graphql';


@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private client: V6Client<Schema> = generateClient<Schema>();

  public async getAllVehicles(): Promise<Schema['Vehicle']['type'][]> {
    const res = await this.client.models.Vehicle.list();
    return res.data;
  }
}
