import {Component} from '@angular/core';
import {ProductionsModel} from './models/productions.model';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  productions: ProductionsModel[] = [
    {
      title: 'Pignon sur rue',
      description: `"Pignon sur rue" est ma première exposition solo. L'objectif était de réaliser des oeuvres où l'ont retrouvait les codes de l'affiche brutaliste, teintés de mon traditionnel esprit punk. Pour y ajouter mon univers, toutes les photos qui m'ont servi ont été prises dans notre Cité Ardente ! Les textures des affiches ont également été réalisées par mes soins.`,
      type: 'expo',
      link: 'https://www.instagram.com/p/C2zQSAPt2QC/',
      tags: [],
      year: 2024,
    },
    {
      title: 'Je vous l\'avais dit que je le ferais.',
      description: '"Je vous l\'avais dit que je le ferais." est une exposition collective à mon initiative. L\'idée était que chaque exposant s\'impose une contrainte, plus ou moins astreignante, afin de développer de nouvelles capacités. Les différentes personnalités ont permis d\'avoir des réalisations très variées. En ce qui concerne ma contrainte, toutes mes œuvres ont été basées sur des polaroids que l\'on retrouve dans l\'édition "La Genèse"',
      type: 'expo',
      link: 'https://www.instagram.com/p/CvH4lzuNA6n/',
      tags: [],
      year: 2022,
    },
    {
      title: 'Tatouage(s)',
      description: 'Bien que je me considère toujours en apprentissage, pendant un peu plus d\'un an, j\'ai eu l\'honneur de tatouer au « Cocoon Ink ». Suite à la fermeture du salon susnommé, mon activité a malheureusement dû prendre fin ; cela ne m\'empêche pas d\'avoir hâte de la reprendre dans mon temps libre dès que j\'en aurai les moyens.',
      type: 'tattoo',
      link: 'https://www.instagram.com/slxxpyboi.tattoo/',
      tags: [],
      year: 2022,
    },
    {
      title:'a',
      description:'a',
      type:'dev',
      link:'',
      tags:[],
      year:2005,
    }
  ];

  displayedProductions = [...this.productions];

  sortBy = 'year';
  filterType = '';

  types: string[] = [];

  ngOnInit() {
    this.types = Array.from(new Set(this.productions.map(p => p.type)));
    this.sortProductions();
  }

  sortProductions() {
    this.displayedProductions.sort((a, b) => {
      if (this.sortBy === 'year') return b.year - a.year;
      if (this.sortBy === 'title') return a.title.localeCompare(b.title);
      if (this.sortBy === 'type') return a.type.localeCompare(b.type);
      return 0;
    });
  }

  filterProductions() {
    this.displayedProductions = this.productions.filter(p =>
      this.filterType ? p.type === this.filterType : true);
    this.sortProductions();
  };
}
