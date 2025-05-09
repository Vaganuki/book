import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
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

  //Support des inputs clavier
  @ViewChildren('navLink', {read: ElementRef}) nav_ItemList!: QueryList<ElementRef>;
  private indexNav = 0;

  ngAfterViewInit() {
    window.addEventListener('keydown', this.navKeyFocus);
    console.log(this.nav_ItemList);
  }

  navKeyFocus = (event: KeyboardEvent) => {
    const navList = this.nav_ItemList.toArray();
    switch (event.key) {
      case 'ArrowUp':
        this.indexNav = this.indexNav - 1 >= 0 ? this.indexNav - 1 : navList.length - 1;
        navList[this.indexNav].nativeElement.focus();
        break;
      case 'ArrowDown':
        this.indexNav = (this.indexNav + 1) % navList.length;
        navList[this.indexNav].nativeElement.focus();
        break;
      default:
        break;
    }
  }
}
