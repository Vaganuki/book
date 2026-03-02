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
  @ViewChild('heroImage') heroImage!: ElementRef<HTMLDivElement>;
  currentImageIndex = 0;
  interval: number = 2500;

  imagesUris: string[] = [
    '30-40_Absent_avec_effets.png',
    '120-60.png',
    '2024-01-30_192441_10.jpg',
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
    this.carouselTimer = setInterval(() => {
      this.carouselTransition();
    }, this.interval);
  }

  private carouselAnimations = [
    (el: HTMLDivElement, onComplete:() => void) => {
      gsap.to(el,{
        filter: 'blur(10px)',
        duration: 0.4,
        onComplete
      });
    },
    (el: HTMLDivElement, onComplete:() => void) => {
      gsap.to(el,{
        opacity: 0,
        duration: 0.4,
        onComplete
      });
    },
    (el: HTMLDivElement, onComplete:() => void) => {
      gsap.to(el,{
        scaleY: 0,
        duration: 0.4,
        onComplete
      });
    },
  ]

  private carouselTransition() {

    const el = this.heroImage.nativeElement;

    const randomAnim = this.carouselAnimations[Math.floor(Math.random() * this.carouselAnimations.length)];

    randomAnim(el, () => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagesUris.length;
      gsap.to(el, {
        filter: 'blur(0px)',
        opacity: 1,
        scaleY: 1,
        duration: 0.4,
      });
    });
  }

}
