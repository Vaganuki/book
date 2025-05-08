import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {ButtonModule} from 'primeng/button';
import {NavComponent} from "./components/nav/nav.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, ButtonModule, NavComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SleepyBook';

  constructor(private primeng: PrimeNG) {
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');
  }

  showScreen : boolean = false;

  toggleScreen(){
    this.showScreen = !this.showScreen;
  }
}
