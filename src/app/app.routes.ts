import { Routes } from '@angular/router';
import {DevTestsComponent} from './components/dev-tests/dev-tests.component';
import {MainScreenComponent} from './components/main-screen/main-screen.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainScreenComponent
  },
  {
    path: '',
    component: DevTestsComponent,
  }
];
