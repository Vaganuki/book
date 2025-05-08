import { Component } from '@angular/core';
import { NavItem } from './models/navitem.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  routes:  NavItem[] =[
    {
      name:'Liens',
      route: 'demos'
    },
    {
      name :'Exo',
      route : 'exos'
    },
  ]
}
