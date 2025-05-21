import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  birthday: Date = new Date('2000-06-29');
  life: number = 45;
  xp: number = 0;
  level: number = 0;

  ngOnInit() {
    this.getLVLandXP();
  }

  getLVLandXP() {
    const today = new Date();
    const currentYear = today.getFullYear();

    const lastBirthday = new Date(currentYear, this.birthday.getMonth(), this.birthday.getDate());
    const nextBirthday = new Date(currentYear + 1, this.birthday.getMonth(), this.birthday.getDate());

    if (today < lastBirthday) {
      this.level = currentYear - this.birthday.getFullYear() - 1;
      lastBirthday.setFullYear(currentYear - 1);
      nextBirthday.setFullYear(currentYear);
    } else {
      this.level = currentYear - this.birthday.getFullYear();
    }

    const timeSinceLast = today.getTime() - lastBirthday.getTime();
    const totalYearTime = nextBirthday.getTime() - lastBirthday.getTime();

    this.xp = Math.floor((timeSinceLast / totalYearTime) * 100);
  }
}
