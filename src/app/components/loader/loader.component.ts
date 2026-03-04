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
  @ViewChild('loadingTextOverlay') loadingTextOverlay!: ElementRef<HTMLDivElement>;
  @ViewChild('almondPath') almondPath!: ElementRef<SVGPathElement>;
  @ViewChild('iris') iris!: ElementRef<SVGCircleElement>;
  @ViewChild('svgContainer') svgContainer!: ElementRef<SVGElement>;
  @ViewChildren('loaderItemRef') loaderItems!: QueryList<ElementRef<HTMLLIElement>>;

  @Output() animationDone = new EventEmitter();

  currentPercent = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.loaderAnimation();
  }

  get formattedPercent(): string {
    return String(this.currentPercent).padStart(3, '0');
  }

  private loaderAnimation() {

    //Loading text variables
    const items = this.loaderItems.toArray();

    items.forEach((item) => item.nativeElement.classList.remove('active'));

    const itemDuration = 0.2;

    const delays = items.map(() => 0.2 + Math.random() * 0.2);
    const offsets = delays.reduce((acc, delay, i) => {
      acc.push(i === 0 ? 0 : acc[i - 1] + itemDuration + delays[i - 1]);
      return acc;
    }, [] as number[]);

    const totalDuration = offsets[offsets.length - 1] + itemDuration + delays[delays.length - 1];

    //SVG animation variables

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


    //ACTUAL animation
    const tl = gsap.timeline({
      onComplete: () => {
        this.animationDone.emit();
      },
    });

    tl.fromTo(this.loadingTextOverlay.nativeElement,{
      height: 0,
    },{
      height: '15vh',
      duration: 0.4,
      easing: 'power2.out',
    },0);

    //Here we do the Loading part
    const counter = {val: 0};
    tl.to(counter, {
      val: 100,
      duration: totalDuration,
      ease: 'power1.inOut',
      onUpdate: () => {
        this.currentPercent = Math.round(counter.val);
        this.cdr.detectChanges();
      }
    }, ('<'));

    items.forEach((item, i) => {
      tl.call(() => {
        if (i > 0) items[i - 1].nativeElement.classList.remove('active');
        item.nativeElement.classList.add('active');
        item.nativeElement.scrollIntoView({block:'nearest', behavior: 'smooth'});
      }, [], offsets[i]);

      tl.to({}, {
        duration: itemDuration + delays[i],
      }, offsets[i]);
    });

    tl.to(this.loadingTextOverlay.nativeElement,{
      height: 0,
      opacity: 0,
      duration: 0.4,
      easing: 'power2.out',
      onComplete: () => {
        this.overlay.nativeElement.style.backgroundColor = 'transparent'
      },
    },'<');

    //here we do the svg thingy

    tl.to(svgEl, {
      display: "block",
    }, '<');

    tl.to(proxy, {
      rx: vw * 0.45,
      ry: vh * (isPortrait ? 0.35 : 0.18),
      duration: 1.1,
      ease: 'power3.inOut',
      onUpdate: () => {
        almondEl.setAttribute('d', buildAlmond(proxy.rx, proxy.ry));
      }
    }, '<+0.5');

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
