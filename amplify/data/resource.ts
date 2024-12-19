import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { SelectionSet } from 'aws-amplify/data';

const schema = a.schema({
  Address: a.model({
    addressId: a.id(),
    street: a.string(),
    city: a.string(),
    state: a.string(),
    zip: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    user: a.belongsTo('User', 'uid'),
    uid: a.id(),
  })
    .identifier(['addressId'])
    .authorization((allow) => [allow.guest()]),

  User: a.model({
    uid: a.id(),
    customerType: a.enum(['individual', 'business']),
    phone: a.string().required(),
    username: a.string().required(),
    userType: a.enum(['USER', 'ADMIN']),
    email: a.email().required(),
    vehicles: a.hasMany('Vehicle', 'uid'),
    bookings: a.hasMany('Booking', 'uid'),
    address: a.hasOne('Address', 'uid'),
  })
    .identifier(['uid'])
    .authorization((allow) => [allow.guest()]),

  Booking: a.model({
    bookingId: a.id(),
    vehicleId: a.id(),
    uid: a.id(),
    user: a.belongsTo('User', 'uid'),
    vehicle: a.belongsTo('Vehicle', 'vehicleId'),
    startDate: a.datetime().required(),
    createdAt: a.datetime().default(new Date().toISOString()),
    updatedAt: a.datetime().default(new Date().toISOString()),
  })
    .identifier(['bookingId'])
    .authorization((allow) => [allow.guest()]),

  Vehicle: a.model({
    vehicleId: a.id(),
    bookings: a.hasMany('Booking', 'vehicleId'),
    plate: a.string().required(),
    name: a.string().required(),
    brand: a.string(),
    description: a.string().required(),
    active: a.boolean().required(),
    status: a.enum(['available', 'rented', 'blocked']),
    lockStatus: a.enum(['locked', 'unlocked', 'error']),
    location: a.customType({
      lat: a.float().required(),
      long: a.float().required(),
    }),
    emptyWeight: a.float().required(),
    grossWeight: a.float().required(),
    createdAt: a.datetime().default(new Date().toISOString()),
    updatedAt: a.datetime().default(new Date().toISOString()),
    vehicleType: a.enum(['suv', 'trailer']),
    media: a.hasMany('VehicleMedia', 'vehicleId'),
    user: a.belongsTo('User', 'uid'),
    uid: a.id(),
  })
    .identifier(['vehicleId'])
    .authorization((allow) => [allow.guest()]),

  VehicleMedia: a.model({
    mediaId: a.id(),
    s3path: a.string().required(),
    mediaType: a.enum(['video', 'image']),
    alt: a.string(),
    vehicle: a.belongsTo('Vehicle', 'vehicleId'),
    createdAt: a.datetime().default(new Date().toISOString()),
    updatedAt: a.datetime().default(new Date().toISOString()),
    vehicleId: a.id(),
  })
    .identifier(['mediaId'])
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;
const selectionSet = ['vehicles.*', 'bookings.*', 'address.*'] as const;
export type User = SelectionSet<Schema['User']['type'], typeof selectionSet>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
