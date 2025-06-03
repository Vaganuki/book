import { Routes } from '@angular/router';
import {LinksComponent} from './components/links/links.component';
import {MainScreenComponent} from './components/main-screen/main-screen.component';
import {MusicComponent} from './components/music/music.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ClaculatriceComponent} from './components/claculatrice/claculatrice.component';
import {CasinoComponent} from './components/casino/casino.component';

export const routes: Routes = [
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'casino',
    component: CasinoComponent,
  },
  {
    path: 'claculatrice',
    component: ClaculatriceComponent,
  },
  {
    path: 'contact',
    component: ContactsComponent,
  },
  {
    path: '',
    component: MainScreenComponent,
  }
];
