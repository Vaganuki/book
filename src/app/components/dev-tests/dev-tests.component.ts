import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dev-tests',
  imports: [ButtonModule, RouterLink],
  templateUrl: './dev-tests.component.html',
  styleUrl: './dev-tests.component.scss'
})
export class DevTestsComponent {

}
