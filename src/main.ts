import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// We import 'dataOperations' as 'JexiaDataOperations' for clarity from 'browser' as this in the
// version of the Jexia SDK that has been designed to work on browsers correctly. And we want
// our angular application to work... Right?
// 'jexiaClient' is used below to allow initiate our Jexia connection
import { dataOperations as JexiaDataOperations, jexiaClient } from "jexia-sdk-js/browser";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Declare the data operation variable
const dataModule = JexiaDataOperations();

// These are your Jexia project credentials. It's best to pass these as environment variables
const credentials = {
  projectID: "<your-project-id>",
  key: "<your-project-api-key>",
  secret: "<your-project-api-secret>",
};

// The Jexia JS SDK is very simple to use, you simply register and initiate the client
// and you can then use the data operations to run any CRUD operations within your
// Angular project

// SDK Docs: https://jexia.github.io/jexia-sdk-js/

// An example snippet: 
/*  
  jexiaClient().init(credentials, dataModule);
  dataModule
    .dataset("<your-dataset-name>")
    .select()
    .execute()
    .then(records => console.log("All the records:", records))
    .catch(error => console.error("Something wrong happened:", error));
*/