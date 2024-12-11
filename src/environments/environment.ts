import {IEnvironment} from "../app/model/environment.model";

export const environment: IEnvironment = {
  production: false,
  awsConfig: {
    awsRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_chIiFpBCG',
    userPoolClientId: 'dsa0rr9qtpghj7gqemvuqnb0q',
    identityPoolId: 'eu-central-1:0b1b1b1b-0b1b-0b1b-0b1b-0b1b1b1b1b1b',
  }
};
