export interface IEnvironment {
  production: boolean;
  awsConfig:{
    awsRegion: string;
    userPoolClientId: string;
    userPoolId: string;
    identityPoolId: string;
  }
}
