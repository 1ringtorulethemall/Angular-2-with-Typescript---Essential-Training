import{ platformBrowserDynamic} from'@angular/platform-browser-dynamic';
import {AppModule} from './app.Module';

const platform= platformBrowserDynamic();

platform.bootstrapModule(AppModule);
