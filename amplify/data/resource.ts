import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Address: a.model({
    addressId: a.id(),
    street: a.string().required(),
    city: a.string().required(),
    state: a.string().required(),
    zip: a.string().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    user: a.belongsTo('User', 'uid'),
    uid: a.id(),

  })
    .identifier(['addressId'])
    .authorization((allow) => [allow.owner()]),

  User: a.model({
    uid: a.id(),
    customerType: a.enum(['individual', 'business']),
    phone: a.string().required(),
    username: a.string().required(),
    email: a.email().required(),
    vehicles: a.hasMany('Vehicle', 'uid'),
    bookings: a.hasMany('Booking', 'uid'),
    address: a.hasOne('Address', 'uid'),
  })
    .identifier(['uid'])
    .authorization((allow) => [allow.owner()]),

  Booking: a.model({
    bookingId: a.id(),
    user: a.belongsTo('User', 'uid'),
    vehicle: a.belongsTo('Vehicle', 'vehicleId'),
    startDate: a.datetime().required(),
    vehicleId: a.id(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    uid: a.id(),
  })
    .identifier(['bookingId'])
    .authorization((allow) => [allow.owner(), allow.group('Admin')]),

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
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    vehicleType: a.enum(['suv', 'trailer']),
    media: a.hasMany('VehicleMedia', 'vehicleId'),
    user: a.belongsTo('User', 'uid'),
    uid: a.id(),
  })
    .identifier(['vehicleId'])
    .authorization((allow) => [allow.owner(), allow.group('Admin')]),

  VehicleMedia: a.model({
    mediaId: a.id(),
    s3path: a.string().required(),
    mediaType: a.enum(['video', 'image']),
    alt: a.string(),
    vehicle: a.belongsTo('Vehicle', 'vehicleId'),
    vehicleId: a.id(),
  })
    .identifier(['mediaId'])
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
