import {Schema} from "../../../amplify/data/resource";

export enum USER_TYPE {
 USER = 'USER',
 ADMIN = 'ADMIN',
}

export type TInitialUser = Omit<Schema['User']['type'], 'vehicles'| 'bookings' | 'address' | 'createdAt' | 'updatedAt'>
