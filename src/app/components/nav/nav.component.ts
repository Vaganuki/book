import {Component, ElementRef, PLATFORM_ID, QueryList, ViewChildren, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NavItem} from './models/navitem.model';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  private platformId = inject(PLATFORM_ID);

  //Support des inputs clavier
  @ViewChildren('navLink', {read: ElementRef}) nav_ItemList!: QueryList<ElementRef>;
  private indexNav = 0;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('keydown', this.navKeyFocus);
    }
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
      label: 'Mes productions',
      route: 'projects'
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
}
