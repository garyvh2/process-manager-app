import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularEmitter } from 'kuker-emitters';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

AngularEmitter();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
