export interface IEnvironment {
  production: boolean;
  awsConfig:{
    appId: string;
    awsRegion: string;
    userPoolClientId: string;
    userPoolId: string;
    identityPoolId: string;
    graphHttpUrl: string;
    graphRealtimeUrl: string;
  },
  toast: {
    duration: number,
    position: 'top' | 'bottom' | 'middle',
  }
}
