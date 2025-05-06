import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'SleepyBook';

  constructor(private primeng: PrimeNG) {
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');
  }

  ngOnInit() {
    // this.primeng.ripple.set(true)
  }
}
