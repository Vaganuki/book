import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {randomInt} from 'toolzy';

@Component({
  selector: 'app-casino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casino.component.html',
  styleUrl: './casino.component.scss'
})
export class CasinoComponent {

  isLuminanceRunning = false;

  wins = parseInt(this.getStat('wins'));
  losses = parseInt(this.getStat('losses'));

  luminance() {
    this.isLuminanceRunning = true;
    const caseList = this.cases.toArray();

    caseList.forEach(c => {
      c.nativeElement.classList.remove('lum');
    })

    let cycleCount = 0;
    const cycles = caseList.length;
    const randomIndex = Math.floor(Math.random() * caseList.length);

    const cycle = () => {

      caseList.forEach((elem, i: number) => {
        setTimeout(() => {
          elem.nativeElement.classList.toggle('lum');
          const beep = new Audio('sounds/8-bit-hit-7_NWM.mp3').play();
          setTimeout(() => {
            elem.nativeElement.classList.toggle('lum');
          }, 50);
        }, 50 * i);
      });

      cycleCount++;

      if (cycleCount < cycles) {
        setTimeout(cycle, 50 * cycles + 50);
      }
    };
    cycle();

    setTimeout(() => {
      const element = caseList[randomIndex];
      element.nativeElement.classList.toggle('lum');
      this.isLuminanceRunning = false;
      if (randomIndex == 5) {
        const beep = new Audio('sounds/experimental-8-bit-sound-270302.mp3').play();
        this.wins++;
        this.saveStat('wins', this.wins);
      } else {
        const beep = new Audio('sounds/8-bit-wrong-2-84407.mp3').play();
        this.losses++;
        this.saveStat('losses', this.losses);
      }
    }, cycles * (50 * (caseList.length - 1) + 50 + 50))
  }

  // Merci, encore une fois, à mon collègue Simon Arce

  getStat(key: string): string {
    return sessionStorage.getItem(key) ?? '0';
  }

  saveStat(key: string, value: number) {
    sessionStorage.setItem(key, value.toString());
  }


  //Nouvelle Prod ici

  results: string[] = [];
  allOptions = [
    '𓆩✖𓆪', 'lose everything', '𓆩☠𓆪', 'lose everything', '𓆩✖𓆪',
    'JACKPOT !!!!!',
    '𓆩✖𓆪', 'lose everything', '𓆩✘𓆪', 'lose everything', '𓆩✖𓆪',
  ];

  transform = 'translateY(0px)'

  roll() {
    this.results = [];
    this.transform = 'translateY(0)';
    this.isLuminanceRunning = true;
    setTimeout(() => {

      const spinResults = [];

      for (let i = 0; i < 20; i++) {
        const random = this.allOptions[randomInt(0, this.allOptions.length - 1)];
        spinResults.push(random)
        const beep = new Audio('sounds/8-bit-hit-7_NWM.mp3').play();
      }

      const final = this.allOptions[randomInt(0, this.allOptions.length - 1)];
      spinResults.push(final);

      this.results = spinResults;

      setTimeout(() => {
        const totalHeight = 30 * (spinResults.length - 1);
        this.transform = `translateY(-${totalHeight}px)`;
      })

      setTimeout(() => {
        if (final === 'JACKPOT !!!!!') {
          const beep = new Audio('sounds/experimental-8-bit-sound-270302.mp3').play();
          this.wins++;
          this.saveStat('wins', this.wins);
        } else {
          const beep = new Audio('sounds/8-bit-wrong-2-84407.mp3').play();
          this.losses++;
          this.saveStat('losses', this.losses);
        }
        this.isLuminanceRunning = false;
      }, 2000);
    },100);
  }



  // Version finale parce que y en a marre

  isRolling = false;

  @ViewChildren('option') rouletteOption!: QueryList<ElementRef>;

}
