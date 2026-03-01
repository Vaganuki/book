import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
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
  @ViewChild('svgContainer') svgContainer!: ElementRef<SVGElement>;
  @ViewChildren('loaderItemRef') loaderItems!: QueryList<ElementRef<HTMLLIElement>>;

  @Output() animationDone = new EventEmitter();

  currentPercent = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.playIntro();
  }

  get formattedPercent(): string {
    return String(this.currentPercent).padStart(3, '0');
  }

  private playIntro(): void {
    this.playTextSequence().then(() => this.playSvgAnimation());
  }

  private playTextSequence(): Promise<void> {
    return new Promise((resolve) => {
      const items = this.loaderItems.toArray();

      items.forEach((item) => item.nativeElement.classList.remove('active'));

      const itemDuration = 0.35;

      const delays = items.map(() => 0.25 + Math.random() * 0.2);
      const offsets = delays.reduce((acc, delay, i) => {
        acc.push(i === 0 ? 0 : acc[i - 1] + itemDuration + delays[i - 1]);
        return acc;
      }, [] as number[]);

      const totalDuration = offsets[offsets.length - 1] + itemDuration + delays[delays.length - 1];

      const tl = gsap.timeline({
        onComplete: () => {
          (document.querySelector('.loading-text-overlay') as HTMLElement).style.display = 'none';
          this.overlay.nativeElement.style.backgroundColor = 'transparent';
          resolve();
        }
      });

      const counter = {val : 0};
      tl.to(counter,{
        val: 100,
        duration: totalDuration,
        ease: 'none',
        onUpdate: () => {
          this.currentPercent = Math.round(counter.val);
          this.cdr.detectChanges();
        }
      },0);


      items.forEach((item, index) => {
        tl.call(() => {
          if(index > 0) items[index - 1].nativeElement.classList.remove('active');
          item.nativeElement.classList.add('active');
          item.nativeElement.scrollIntoView({block:'nearest', behavior: 'smooth'});
        }, [], offsets[index]);

        tl.to({},{
          duration: itemDuration + delays[index],
        },offsets[index]);
      });

    });
  }

  private playSvgAnimation(): void {

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const cx = vw / 2;
    const cy = vh / 2;

    const maxRadius = Math.sqrt(vw ** 2 + vh ** 2) / 2;

    const overlayEl = this.overlay.nativeElement;
    const almondEl = this.almondPath.nativeElement;
    const irisEl = this.iris.nativeElement;
    const svgEl = this.svgContainer.nativeElement;


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

    tl.to(svgEl, {
      display: "block",
    }, 0);

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
