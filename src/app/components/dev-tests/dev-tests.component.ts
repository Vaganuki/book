import {Component, ElementRef, QueryList, ViewChildren, viewChildren} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {NavItem} from '../nav/models/navitem.model';

@Component({
  selector: 'app-dev-tests',
  imports: [ButtonModule, RouterLink],
  templateUrl: './dev-tests.component.html',
  styleUrl: './dev-tests.component.scss'
})
export class DevTestsComponent {

  // dev: NavItem[] = [
  //   {
  //     label: 'Accueil',
  //     route: '/',
  //   },
  //   {
  //     label: 'Liens',
  //     route: 'links'
  //   },
  //   {
  //     label: 'Musiques',
  //     route: 'music'
  //   },
  //   {
  //     label: 'Palmares',
  //     route: 'palmares'
  //   },
  //   {
  //     label: 'Tout sur moi',
  //     route: 'about-me'
  //   },
  //   {
  //     label: 'Contact',
  //     route: 'contact'
  //   },
  //   {
  //     label: 'dev',
  //     route: 'dev'
  //   }
  // ]
  //
  // @ViewChildren('devBtn', {read: ElementRef}) dev_btn!: QueryList<ElementRef>;
  // private currentIndex = 0;
  //
  // ngAfterViewInit(): void {
  //   window.addEventListener('keydown', this.keyFocus);
  // }
  //
  // keyFocus = (event: KeyboardEvent): void => {
  //   const buttons = this.dev_btn.toArray();
  //   console.log(event.key);
  //   switch (event.key) {
  //     case 'ArrowUp':
  //       this.currentIndex = this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : buttons.length-1;
  //       buttons[this.currentIndex].nativeElement.focus();
  //       break;
  //     case 'ArrowDown':
  //       this.currentIndex = (this.currentIndex + 1) % buttons.length ;
  //       buttons[this.currentIndex].nativeElement.focus();
  //       break;
  //     default:
  //       buttons[this.currentIndex].nativeElement.focus();
  //       break;
  //   }
  // }
  //
  // onFocus() {
  //   const buttons = this.dev_btn.toArray();
  //   if (!buttons.length) return;
  //   console.log(this.currentIndex, buttons.length);
  //   this.currentIndex = (this.currentIndex + 1) % (buttons.length + 1);
  // }
}
