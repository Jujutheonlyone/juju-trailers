import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  User: a.model({
    uid: a.id(),
    username: a.string().required(),
    email: a.string().required(),
    vehicles: a.hasMany('Vehicle', 'uid'),
  })
    .identifier(['uid'])
    .authorization((allow) => [allow.owner()]),

  Vehicle: a.model({
    vehicleId: a.id(),
    plate: a.string().required(),
    name: a.string().required(),
    brand: a.string(),
    description: a.string().required(),
    status: a.enum(['available', 'rented', 'blocked']),
    lockStatus: a.enum(['locked', 'unlocked', 'error']),
    location: a.customType({
      lat: a.float().required(),
      long: a.float().required(),
    }),
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
