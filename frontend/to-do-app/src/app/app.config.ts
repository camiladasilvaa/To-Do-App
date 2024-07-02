import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"to-do-list-2c746","appId":"1:69678029916:web:ea5620dc490a4dad931a99","storageBucket":"to-do-list-2c746.appspot.com","apiKey":"AIzaSyBxbQ-uF0M48NpWnS5M9DH8sW4li5bQP4U","authDomain":"to-do-list-2c746.firebaseapp.com","messagingSenderId":"69678029916","measurementId":"G-ZS2XHS4H9F"})), provideAuth(() => getAuth())]
};
