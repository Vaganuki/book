import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoaderComponent} from './components/loader/loader.component';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sleepy Book';

  ngAfterViewInit() {
    this.initCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.carouselTimer);
  }

  //Loader here
  showLoader = true;

  endLoader = () => {
    this.showLoader = false;
    console.log(this.showLoader);
  }

  //Hero Carousel Code here
  @ViewChild('heroMainImageContainer') heroMainImageContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('heroSecondaryImageContainer') heroSecondaryImageContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('heroHighlighter') heroHighlighter!: ElementRef<HTMLDivElement>;
  @ViewChild('heroMainHue') heroMainHue!: ElementRef<HTMLDivElement>;
  @ViewChild('heroSecondaryHue') heroSecondaryHue!: ElementRef<HTMLDivElement>;
  @ViewChild('heroMainImage') heroMainImage!: ElementRef<HTMLImageElement>;
  @ViewChild('heroSecondaryImage') heroSecondaryImage!: ElementRef<HTMLImageElement>;

  currentImageIndex = 0;
  nextImageIndex = 1;
  interval: number = 3800;
  isCurrentHero = true;

  imagesUris: string[] = [
    '30-40_Absent_avec_effets.png',
    '2024-01-30_192441_10.jpg',
    '120-60.png',
    '2024-01-30_192441_16.jpg',
    '2024-01-30_192441_17.jpg',
    'affiche.jpg',
    'Bannière.jpg',
    'iPad.png',
    'Manuscrit_2024-12-01_180652_1.jpg',
    'Manuscrit_2024-12-01_180652_7.jpg',
    'passif_agressif.jpg',
  ];

  private carouselTimer: any;

  private initCarousel() {
    const mainImg = this.heroMainImage.nativeElement;

    if (mainImg.complete && mainImg.naturalWidth > 0) {
      this.fitFilterToImage(mainImg, this.heroMainHue.nativeElement);
    } else {
      mainImg.addEventListener('load', () => {
        this.fitFilterToImage(mainImg, this.heroMainHue.nativeElement);
      }, {once: true});
    }

    this.carouselTimer = setInterval(() => {
      this.carouselTransition();
    }, this.interval);
  }

  carouselTransition() {
    const image1 = this.heroMainImageContainer.nativeElement;
    const image2 = this.heroSecondaryImageContainer.nativeElement;
    const highlighter = this.heroHighlighter.nativeElement;

    if (this.isCurrentHero) {
      this.fitFilterToImage(this.heroMainImage.nativeElement, this.heroHighlighter.nativeElement);
      this.fitFilterToImage(this.heroSecondaryImage.nativeElement, this.heroSecondaryHue.nativeElement);
      this.heroImageSlide(highlighter, image1, image2, this.isCurrentHero);
    } else {
      this.fitFilterToImage(this.heroSecondaryImage.nativeElement, this.heroHighlighter.nativeElement);
      this.fitFilterToImage(this.heroMainImage.nativeElement, this.heroMainHue.nativeElement);
      this.heroImageSlide(highlighter, image2, image1, this.isCurrentHero);
    }
    this.isCurrentHero = !this.isCurrentHero;
  }

  private heroImageSlide = (
    highlighter: HTMLDivElement,
    currentImage: HTMLDivElement,
    nextImage: HTMLDivElement,
    isCurrent: boolean,
  ): void => {

    const tl = gsap.timeline({});

    //First we cover existing image
    tl.to(highlighter, {
      y: 0,
      duration: 0.4,
      ease: 'power3.out',
    }, 0);

    //Then everything shifts upward
    tl.to(nextImage, {
      y: 0,
      duration: 0.5,
      ease: 'power3.in',
    }, '>-0.2');

    tl.to(highlighter, {
      y: '-100%',
      duration: 0.5,
      ease: 'power3.in',
    }, '<');

    tl.to(currentImage, {
      y: '-100%',
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        if (isCurrent) {
          this.currentImageIndex = (this.nextImageIndex + 1) % this.imagesUris.length;
        } else {
          this.nextImageIndex = (this.currentImageIndex + 1) % this.imagesUris.length;
        }
      },
    }, '<');

    //Next we reset the Image and highlighter position
    tl.to(highlighter, {
      y: '100%',
      duration: 0,
    }, '>');
    tl.to(currentImage, {
      y: '100%',
      duration: 0,
    }, '<');

  }

  private fitFilterToImage = (image: HTMLImageElement, filter: HTMLDivElement) => {
    const {offsetWidth: w, offsetHeight: h, offsetLeft: l, offsetTop: t} = image;

    gsap.set(filter, {
      width: w, height: h, left: l, top: t,
    });
  };
}
