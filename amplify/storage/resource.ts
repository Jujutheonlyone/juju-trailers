import {defineStorage} from "@aws-amplify/backend";


export const storage = defineStorage({
  name: 'juju-trailers',
  access: (allow) => ({
    'trailers/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
  })
});
