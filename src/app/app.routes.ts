import { Routes } from '@angular/router';
import {DevTestsComponent} from './components/dev-tests/dev-tests.component';
import {LinksComponent} from './components/links/links.component';
import {MainScreenComponent} from './components/main-screen/main-screen.component';
import {MusicComponent} from './components/music/music.component';

export const routes: Routes = [
  {
    path: 'dev',
    component: DevTestsComponent,
  },
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'palmares',
    component: DevTestsComponent,
  },
  {
    path: 'about-me',
    component: DevTestsComponent,
  },
  {
    path: 'contact',
    component: DevTestsComponent,
  },
  {
    path: '',
    component: MainScreenComponent,
  }
];
