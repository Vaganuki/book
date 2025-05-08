import { Routes } from '@angular/router';
import {DevTestsComponent} from './components/dev-tests/dev-tests.component';
import {LinksComponent} from './components/links/links.component';
import {MainScreenComponent} from './components/main-screen/main-screen.component';

export const routes: Routes = [
  {
    path: 'dev',
    component: DevTestsComponent,
  },
  {
    path: '',
    component: MainScreenComponent,
  }
];
