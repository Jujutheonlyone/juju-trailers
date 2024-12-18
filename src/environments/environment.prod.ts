import {IEnvironment} from "../app/model/environment.model";

export const environment: IEnvironment= {
  production: false,
  awsConfig: {
    awsRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_S40kbheN5',
    userPoolClientId: '64ee6pacitqgt2nmp8b6utdhuj',
    identityPoolId: 'eu-central-1:15d9a56b-f3ca-465a-b151-2295d7a98eab',
  },
  toast: {
    duration: 1500,
    position: 'top',
  }
};
