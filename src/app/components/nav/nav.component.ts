import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NavItem} from './models/navitem.model';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  routes: NavItem[] = [
    {
      label: 'Accueil',
      route: '/',
    },
    {
      label: 'Liens',
      route: 'links'
    },
    {
      label: 'Musiques',
      route: 'music'
    },
    {
      label: 'Palmares',
      route: 'palmares'
    },
    {
      label: 'Tout sur moi',
      route: 'about-me'
    },
    {
      label: 'Contact',
      route: 'contact'
    },
    {
      label: 'dev',
      route: 'dev'
    }
  ];

  // menuItems: MenuItem[] = [
  //   {
  //     label:'Accueil',
  //     routerLink:'/',
  //   },
  //   {
  //     label:'Liens',
  //     routerLink:'links'
  //   },
  //   {
  //     label:'Musiques',
  //     routerLink:'music'
  //   },
  //   {
  //     label:'Palmares',
  //     routerLink:'palmares'
  //   },
  //   {
  //     label:'Tout sur moi',
  //     routerLink:'about-me'
  //   },
  //   {
  //     label:'Contact',
  //     routerLink:'contact'
  //   },
  //   {
  //     label:'dev',
  //     routerLink:'dev'
  //   }
  // ];
}
