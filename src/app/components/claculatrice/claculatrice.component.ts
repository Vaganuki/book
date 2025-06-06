import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {randomInt} from 'toolzy';

@Component({
  selector: 'app-claculatrice',
  imports: [],
  templateUrl: './claculatrice.component.html',
  styleUrl: './claculatrice.component.scss'
})
export class ClaculatriceComponent {

  numberList: number[] = [];
  displayedNumber = "0";
  outputNumber = 0;
  wrongPathTryAgain = false;
  barCodeDisplayed = false;
  isBarCodeBarCoding = false;

  selectNumber(event: MouseEvent) {
    if (!this.isBarCodeBarCoding) {
      const button = event.target as HTMLButtonElement;
      const number = button.innerText;

      if (this.barCodeDisplayed) {
        this.displayedNumber = "0";
        this.barCodeDisplayed = false;
      }

      if (this.displayedNumber === "0") {
        this.displayedNumber = number;
      } else {
        this.displayedNumber = `${this.displayedNumber}` + number;
      }
    }
  }

  saveNumber() {
    if (!this.isBarCodeBarCoding) {
      this.numberList.push(Number(this.displayedNumber))
      this.displayedNumber = "0";
    }
  };

  resetCalc() {
    if (!this.isBarCodeBarCoding) {
      this.numberList = [];
      this.displayedNumber = "0";
      this.wrongPathTryAgain = false;
    }
  }

  randomFunction() {
    if (!this.isBarCodeBarCoding) {

      const selectedFunction = randomInt(1, 5);
      switch (selectedFunction) {
        case 1 :
          this.chatGPTCalc();
          break;
        case 2 :
          this.sayerFrrCalc()
          break;
        case 3 :
          this.processCalc()
          break;
        case 4 :
          this.concatenationCalc();
          break;
        case 5 :
          this.barCodeCalc();
          break;
        default:
          this.processCalc();
      }
    }
  }

  chatGPTCalc() {
    this.displayedNumber = "Demande à chatGPT non ?";
    this.wrongPathTryAgain = true;
    this.barCodeDisplayed = false;
    this.isBarCodeBarCoding = false;
  }

  sayerFrrCalc() {
    this.displayedNumber = "sayer frr.";
    this.wrongPathTryAgain = true;
    this.barCodeDisplayed = false;
    this.isBarCodeBarCoding = false;
  }

  concatenationCalc() {
    this.saveNumber();
    let stringNumber = "";
    this.numberList.forEach(number => {
      stringNumber = stringNumber + number.toString();
    });
    this.displayedNumber = stringNumber;
    this.numberList = [];
  }

  barCodeCalc() {
    this.saveNumber();
    let barCount = 0;
    this.displayedNumber = "";
    this.numberList.forEach(number => {
      barCount = barCount + number;
    })
    if (barCount !== 0) {
      this.isBarCodeBarCoding = true;
      for (let i = 1; i <= barCount; i++) {
        setTimeout(() => {
          this.displayedNumber = this.displayedNumber + "|";
          if (i === barCount) this.isBarCodeBarCoding = false;
        }, 100 * i)
      }
    }
    this.barCodeDisplayed = true;
    this.numberList = [];
  }

  processCalc() {
    this.saveNumber();
    this.outputNumber = 0;
    console.log(this.numberList);
    this.numberList.forEach(number => {
      this.outputNumber += number;
    });
    this.displayedNumber = this.outputNumber.toString();
    this.numberList = [];
  }

  private audioCtx = new AudioContext();

  playBeep(freq: number, duration = 0.2) {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'square';
    osc.frequency.value = freq;
    gain.gain.value = 0.2;

    osc.connect(gain).connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + duration);
  }

  playOscillatingNote(baseFreq: number, duration: number = 1.2) {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'square';

    // Oscillation douce de la fréquence : vibrato
    const now = this.audioCtx.currentTime;
    osc.frequency.setValueAtTime(baseFreq, now);
    for (let t = 0; t < duration; t += 0.1) {
      const offset = Math.sin(t * 2 * Math.PI * 4) * 10; // oscillation à 4Hz, amplitude ±10Hz
      osc.frequency.linearRampToValueAtTime(baseFreq + offset, now + t);
    }

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration); // fade-out progressif

    osc.connect(gain).connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  playMelody() {
    const melody = [
      {freq: 440, time: 0}, {freq: 880, time: 0},
      {freq: 466.16, time: 0.2}, {freq: 932.33, time: 0.2},
      {freq: 493.88, time: 0.4}, {freq: 987.77, time: 0.4},
      {freq: 523.25, time: 0.6}, {freq: 1046.5, time: 0.6},
    ];

    for (let i = 0; i < melody.length; i++) {
      const note = melody[i];
      const isLast = i === melody.length - 1;

      if (!isLast) {
        setTimeout(() => this.playBeep(note.freq, 0.15), note.time * 1000);
      } else {
        setTimeout(() => this.playOscillatingNote(note.freq, 1.2), note.time * 1000);
      }
    }
  }

}
