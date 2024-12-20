export interface IEnvironment {
  production: boolean;
  awsConfig:{
    awsRegion: string;
    userPoolClientId: string;
    userPoolId: string;
    identityPoolId: string;
  },
  toast: {
    duration: number,
    position: 'top' | 'bottom' | 'middle',
  }
}
