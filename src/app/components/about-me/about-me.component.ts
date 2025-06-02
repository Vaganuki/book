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
  pc: number = 65;
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

  character = {
    identity: {
      name: 'Hugo | SleepyBoi',
      title: 'Développeur Mystique (Full Stack Web) / Alchimiste Visuel (Graphiste)',
      species: 'Humain fatigué',
      alignment: 'Chaotique Neutre',
      familiar: 'Lilou (Felis Catus)'
    },
    stats: {
      int: 121,
      str: 0,
      dex: 5,
      cha: 40,
    },
    skills: [
      {name: 'Graphisme', level: 97},
      {name: 'Angular', level: 90},
      {name: 'SCSS', level: 85},
      {name: 'Node.js', level: 80},
      {name: 'PostgreSQL', level: 80},
      {name: 'MongoDB', level: 70},
    ],
    inventory: [
      'Un super GitHub',
      'Spotify (non optionel)',
      'WebStorm',
      'Procreate',
      'Suite Adobe (légale)',
      'Potion x3 (café)',
    ],
    lore: 'En fait j\'aime pas grandir parce que depuis que je suis né je me trouve génial et maintenant je suis pas sûr si c\'est vrai.' ,
    debuffs: [
      'Astigmatisme',
      'Presbytie',
      'Asthme',
      'Spectre autistique',
      'Magic: The gathering',
    ]
  };


}
