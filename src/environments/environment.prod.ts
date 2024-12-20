import {IEnvironment} from "../app/core/model/environment.model";

export const environment: IEnvironment = {
  production: false,
  awsConfig: {
    appId: 'dt7n2ccdyjakvhbsycoxjggcve',
    awsRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_XHUuuOkM5',
    userPoolClientId: '210dtkbvrfukc9q574uofaluto',
    identityPoolId: 'eu-central-1:33244c27-ee6c-4b73-bac5-9370e49e5016',
    graphHttpUrl: 'https://ajmtdx4z7zebxevdxeli3qqp64.appsync-api.eu-central-1.amazonaws.com/graphql',
    graphRealtimeUrl: 'wss://ajmtdx4z7zebxevdxeli3qqp64.appsync-realtime-api.eu-central-1.amazonaws.com/graphql',
  },
  toast: {
    duration: 1500,
    position: 'top',
  }
};
