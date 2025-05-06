import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MusicComponent} from './components/music/music.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MusicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SleepyBook';
}
