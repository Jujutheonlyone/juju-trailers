import {IEnvironment} from "../app/model/environment.model";

export const environment: IEnvironment= {
  production: false,
  awsConfig: {
    awsRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_XHUuuOkM5',
    userPoolClientId: '210dtkbvrfukc9q574uofaluto',
    identityPoolId: 'eu-central-1:33244c27-ee6c-4b73-bac5-9370e49e5016',
  },
  toast: {
    duration: 1500,
    position: 'top',
  }
};
