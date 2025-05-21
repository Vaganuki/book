import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {ButtonModule} from 'primeng/button';
import {NavComponent} from "./components/nav/nav.component";
import {NgIf} from "@angular/common";
import {trigger, transition, style, animate, keyframes} from "@angular/animations"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('pixelGlitchIn', [
      transition(':enter', [
        animate('800ms steps(5)', keyframes([
          style({
            opacity: 0,
            filter: 'contrast(0.5) brightness(1.2) hue-rotate(40deg)',
            transform: 'scale(0.95)',
            offset: 0
          }),
          style({opacity: 0.4, filter: 'contrast(1.5) hue-rotate(-20deg)', transform: 'scale(1.02)', offset: 0.3}),
          style({opacity: 0.7, filter: 'contrast(1.2)', transform: 'scale(0.98)', offset: 0.6}),
          style({opacity: 1, filter: 'none', transform: 'scale(1)', offset: 1}),
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'SleepyBook';

  constructor(private primeng: PrimeNG, private router: Router) {
  }

  toggleDarkMode() {
    const darkThemeButton = document.getElementById('darkScreen');
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');
    darkThemeButton!.classList.toggle('pi-moon');
    darkThemeButton!.classList.toggle('pi-sun');
  }
  showScreen: boolean = false;
  showIcon : boolean = true;

  hideScreen() {
    this.showIcon = true;
  }


  openScreen() {
    this.showScreen = true;
    this.showIcon = false;
  }


  closeScreen() {
    this.router.navigate(['/']).then(() => {
      this.showScreen = false;
    });
    this.showIcon = true;
  }
}
