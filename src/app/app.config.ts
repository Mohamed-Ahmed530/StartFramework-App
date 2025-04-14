import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withViewTransitions(), withInMemoryScrolling({scrollPositionRestoration:"top"}), withHashLocation()), provideClientHydration(withEventReplay())]
};


//1- withViewTransitions() 
//2- withInMemoryScrolling({scrollPositionRestoration:"top"})
//3- withHashLocation()
