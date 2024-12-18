export const mockTrailers = [
  {
    vehicleId: '1',
    bookings: [],
    plate: 'ABC123',
    name: 'Explorer Trailer',
    brand: 'AdventureCo',
    description: 'Perfect for off-road adventures with ample storage.',
    active: true,
    status: 'available',
    lockStatus: 'locked',
    location: {
      lat: 37.7749,
      long: -122.4194,
    },
    emptyWeight: 750,
    grossWeight: 1500,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    vehicleType: 'trailer',
    media: [],
    user: null,
    uid: 'user123',
  },
  {
    vehicleId: '2',
    bookings: [],
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
    vehicleType: 'trailer',
    media: [],
    user: null,
    uid: 'user456',
  },
  {
    vehicleId: '3',
    bookings: [],
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
    media: [],
    user: null,
    uid: 'user789',
  },
  {
    vehicleId: '4',
    bookings: [],
    plate: 'JKL012',
    name: 'Utility Beast',
    brand: 'HaulPro',
    description: 'Multipurpose utility trailer for all your needs.',
    active: true,
    status: 'available',
    lockStatus: 'locked',
    location: {
      lat: 51.5074,
      long: -0.1278,
    },
    emptyWeight: 850,
    grossWeight: 1700,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    vehicleType: 'trailer',
    media: [],
    user: null,
    uid: 'user1012',
  },
  {
    vehicleId: '5',
    bookings: [],
    plate: 'MNO345',
    name: 'Adventure Compact',
    brand: 'TrailLite',
    description: 'Compact and lightweight trailer for quick getaways.',
    active: true,
    status: 'available',
    lockStatus: 'unlocked',
    location: {
      lat: 48.8566,
      long: 2.3522,
    },
    emptyWeight: 600,
    grossWeight: 1200,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    vehicleType: 'trailer',
    media: [],
    user: null,
    uid: 'user345',
  },
];

console.log(mockTrailers);
