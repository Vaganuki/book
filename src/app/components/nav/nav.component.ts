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
  indexNav = 0;
  navList: ElementRef[] = [];
  audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

  ngAfterViewInit() {
    this.navList = this.nav_ItemList.toArray();
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('keydown', this.navKeyFocus);
    }
  }

  navKeyFocus = (event: KeyboardEvent) => {

    if (window.innerWidth <= 767) {
      switch (event.key) {
        case 'ArrowUp':
          this.navigateUp();
          break;
        case 'ArrowDown':
          this.navigateDown();
          break;
      }
      return;
    } else {
      switch (event.key) {
        case 'ArrowUp':
          this.indexNav = this.indexNav - 1 >= 0 ? this.indexNav - 1 : this.navList.length - 1;
          this.navList[this.indexNav].nativeElement.focus();
          this.playNavigationSound("up");
          break;
        case 'ArrowDown':
          this.indexNav = (this.indexNav + 1) % this.navList.length;
          this.navList[this.indexNav].nativeElement.focus();
          this.playNavigationSound("down");
          break;
        case 'ArrowLeft':
          this.navList[this.indexNav].nativeElement.focus();
          break;
        default:
          break;
      }
    }
  }

  navigateUp() {
    if (this.indexNav > 0) {
      this.indexNav--;
      this.navList[this.indexNav].nativeElement.focus();
      this.playNavigationSound("up");
    }
  }

  navigateDown() {
    if (this.indexNav < this.routes.length - 1) {
      this.indexNav++;
      this.navList[this.indexNav].nativeElement.focus();
      this.playNavigationSound("down");
    }
  }

  routes: NavItem[] = [
    {
      label: 'Accueil',
      route: '/',
    },
    {
      label: 'Tout sur moi',
      route: 'about-me'
    },
    {
      label: 'Où me trouver',
      route: 'links'
    },
    {
      label: 'Mes productions',
      route: 'projects'
    },
    {
      label: 'Claculaltrice',
      route: 'claculaltrice'
    },
    {
      label: 'Casino',
      route: 'casino'
    },
    {
      label: 'Musiques',
      route: 'music'
    },
    {
      label: 'Contact',
      route: 'contact'
    },
  ];

  private playNavigationSound(direction: 'up' | 'down') {
    if (!isPlatformBrowser(this.platformId)) return;

    try {

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.setValueAtTime(direction === 'up' ? 800 : 400, this.audioContext.currentTime);
      oscillator.type = 'square';

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    } catch (error) {
      console.debug('Audio not supported or blocked');
    }
  }
}
