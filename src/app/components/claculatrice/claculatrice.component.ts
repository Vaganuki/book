import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-claculatrice',
  imports: [],
  templateUrl: './claculatrice.component.html',
  styleUrl: './claculatrice.component.scss'
})
export class ClaculatriceComponent {

  @ViewChildren('lumiere') cases!: QueryList<ElementRef>;

  isLuminanceRunning = false;

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
      } else {
        const beep = new Audio('sounds/8-bit-wrong-2-84407.mp3').play();
      }

    }, cycles * (50 * (caseList.length - 1) + 50 + 50))

  }
}
