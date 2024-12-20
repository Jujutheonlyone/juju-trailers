import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {Amplify} from "aws-amplify";
import outputs from '../amplify_outputs.json';
import {V6Client} from "@aws-amplify/api-graphql";
import {Schema} from "../amplify/data/resource";
import {generateClient} from "aws-amplify/api";

Amplify.configure(outputs);
export const dbClient: V6Client<Schema> = generateClient<Schema>({
  authMode: 'userPool',
});
// @ts-ignore
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
