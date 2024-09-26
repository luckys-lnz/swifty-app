import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TrackComponent } from './track/track.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'About Us',
    component: AboutComponent,
  },
  {
    path: 'track',
    title: 'Track Package',
    component: TrackComponent,
  },
  {
    path: 'services',
    title: 'Our Services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    title: 'Contact Us',
    component: ContactComponent,
  },
];
