import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {Amplify} from "aws-amplify";
import output from '../amplify_outputs.json';

Amplify.configure(output);
// @ts-ignore
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
