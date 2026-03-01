import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;
  @ViewChild('almondPath') almondPath!: ElementRef<SVGPathElement>;
  @ViewChild('iris') iris!: ElementRef<SVGCircleElement>;

  @Output() animationDone = new EventEmitter();

  ngAfterViewInit() {
    this.playIntro();
  }

  private playIntro(): void {

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const cx = vw / 2;
    const cy = vh / 2;

    const maxRadius = Math.sqrt(vw ** 2 + vh ** 2) / 2;

    const overlayEl = this.overlay.nativeElement;
    const almondEl = this.almondPath.nativeElement;
    const irisEl = this.iris.nativeElement;

    const isPortrait = vw < 768;

    const buildAlmond = (rx: number, ry: number) => {
      if (isPortrait) {
        return `
          M ${cx} ${cy - ry}
          C ${cx + rx * 0.75} ${cy - ry * 0.1} ${cx + rx * 0.75} ${cy + ry * 0.1} ${cx} ${cy + ry}
          C ${cx - rx * 0.75} ${cy + ry * 0.1} ${cx - rx * 0.75} ${cy - ry * 0.1} ${cx} ${cy - ry}
          Z
        `;
      } else {
        return `
          M ${cx - rx} ${cy}
          C ${cx - rx * 0.1} ${cy - ry * 2} ${cx + rx * 0.1} ${cy - ry * 2} ${cx + rx} ${cy}
          C ${cx + rx * 0.1} ${cy + ry * 2} ${cx - rx * 0.1} ${cy + ry * 2} ${cx - rx} ${cy}
          Z
        `;
      }
    };

    const proxy = {rx: 0, ry: 0};
    almondEl.setAttribute('d', buildAlmond(0, 0));

    const tl = gsap.timeline({
      onComplete: () => this.animationDone.emit(),
    });

    tl.to(proxy, {
      rx: vw * 0.45,
      ry: vh * (isPortrait ? 0.35 : 0.18),
      duration: 1.1,
      ease: 'power3.inOut',
      onUpdate: () => {
        almondEl.setAttribute('d', buildAlmond(proxy.rx, proxy.ry));
      }
    }, 0);

    tl.to(irisEl, {
      attr: {
        r: maxRadius,
      },
      duration: 0.6,
      easing: 'power3.out',
    }, '-=0.2');

    tl.to(overlayEl, {
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      onComplete: () => {
        overlayEl.style.display = 'none';
      },
    }, '+=0.1');
  }
}
