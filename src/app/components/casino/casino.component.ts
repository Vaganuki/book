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
  isRolling = false;

  wins = parseInt(this.getStat('wins'));
  losses = parseInt(this.getStat('losses'));

  @ViewChildren('option') rouletteOption!: QueryList<ElementRef>;

  // Merci, encore une fois, à mon collègue Simon Arce

  getStat(key: string): string {
    return sessionStorage.getItem(key) ?? '0';
  }

  saveStat(key: string, value: number) {
    sessionStorage.setItem(key, value.toString());
  }

  roll() {
    this.isRolling = true;
    const optionsList = this.rouletteOption.toArray();

    optionsList.forEach(option => {
      option.nativeElement.classList.remove('selected', 'glitch', 'jackpot');
    })

    let cycleCount = 0;
    const cycles = optionsList.length;
    const optionIndex = randomInt(0, optionsList.length - 1)

    const cycle = () => {

      optionsList.forEach((elem, i: number) => {
        setTimeout(() => {
          elem.nativeElement.classList.toggle('selected');
          const beep = new Audio('sounds/8-bit-hit-7_NWM.mp3').play();
          setTimeout(() => {
            elem.nativeElement.classList.toggle('selected');
          }, 50)
        }, 50 * i);
      });

      cycleCount++;

      if (cycleCount < cycles) {
        setTimeout(cycle, 50 * cycles + 50);
      }
    };

    cycle();

    setTimeout(() => {
      const selectedOption = optionsList[optionIndex];
      selectedOption.nativeElement.classList.toggle('selected');
      this.isRolling = false;
      if (optionIndex === 5) {
        selectedOption.nativeElement.classList.toggle('jackpot');

        const beep = new Audio('sounds/experimental-8-bit-sound-270302.mp3').play();

        this.wins++;
        this.saveStat('wins', this.wins);
      } else {
        selectedOption.nativeElement.classList.toggle('glitch');

        const beep = new Audio('sounds/8-bit-wrong-2-84407.mp3').play();

        this.losses++;
        this.saveStat('losses', this.losses);
      }
    }, cycles * (50 * (optionsList.length - 1) + 50 + 50));

  }
}
