import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {Amplify} from "aws-amplify";
import {environment} from "./environments/environment";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: environment.awsConfig.userPoolId,
      userPoolClientId: environment.awsConfig.userPoolClientId,
      identityPoolId: environment.awsConfig.identityPoolId,
    }
  }
})
// @ts-ignore
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
