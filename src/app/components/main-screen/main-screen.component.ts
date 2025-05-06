import { Component } from '@angular/core';
import {NavComponent} from '../nav/nav.component';
import {Router, RouterLink} from '@angular/router';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-main-screen',
  imports: [
    NavComponent,
    RouterLink,
    Button
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {

  constructor(private router: Router) {
  }

  goToHome(){
    console.log('oui')
    this.router.navigate(['/']).then();
  }

}
