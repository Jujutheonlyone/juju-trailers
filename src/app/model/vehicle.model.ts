export interface Vehicle {
  vehicleId?: string;
  type: 'trailer' | '4x4';
  licensePlate: string;
  images: string[];
  description: string;
  permissibleGrossWeight: number;
  maxSpeed: number;
  payload: number;
}
