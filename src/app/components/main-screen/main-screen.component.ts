import { Component } from '@angular/core';
import {NavComponent} from '../nav/nav.component';
import {Router} from '@angular/router';
import {Button} from 'primeng/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-main-screen',
  imports: [
    NavComponent,
    Button,
    NgIf
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {
  constructor(private router: Router) {
  }

  showScreen : boolean = false;

  toggleScreen(){
    this.showScreen = !this.showScreen;
  }

}
