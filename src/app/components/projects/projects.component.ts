import {Component} from '@angular/core';
import {ProjectItemsModel} from './models/projectItems.model';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: ProjectItemsModel[] = [
    {
      title: 'Projets Web',
      type: 'group',
      subItems: [
        {
          title: 'Moi ou ton père',
          description: '"Tu préfères: moi ou ton père ?" est un projet réalisé en self study au cours de ma formation de dev web full stack chez Technifutur. Il tire ses origines dans un meme et mon envie de développer un peu plus ma logique de code en JavaScript. Le visuel a été inspiré par un Codepen, lui même inspiré du jeu Balatro.',
          type: 'link',
          link: 'https://vaganuki.github.io/moiOuTonPere/',
          tags: ['JavaScript', 'Fun', 'SCSS'],
          year: 2025
        },
        {
          title: 'Is my computer underwater ?',
          description: 'I\'m filled with a deep sense of joy knowing that I\'m contributing to something larger than myself. It\'s not about grand gestures, but the small, consistent acts of kindness and dedication that ripple outwards. The culmination of countless hours, my website stands as a testament to the power of human ingenuity. It\'s more than code; it\'s a bridge connecting people to resources and support. Each interaction, each success story, fuels a deep sense of purpose. I\'m not just a developer; I\'m a man with a dream, incredibly proud of this contribution to society. This website is a legacy, a symbol of hope, and a beacon of light in the digital world. The pride is immense, knowing my work is making a tangible difference. This isn\'t just a website; it\'s a better world, one click at a time.',
          type: 'link',
          link: 'https://vaganuki.github.io/is-my-computer-under-water/',
          tags: ['HTML', 'Fun', 'Useful'],
          year: 2025
        },
      ]
    },
    {
      title: 'Expositions',
      type: 'group',
      subItems: [
        {
          title: 'Pignon sur rue',
          description: `"Pignon sur rue" est ma première exposition solo. L'objectif était de réaliser des oeuvres où l'ont retrouvait les codes de l'affiche brutaliste, teintés de mon traditionnel esprit punk. Pour y ajouter mon univers, toutes les photos qui m'ont servi ont été prises dans notre Cité Ardente ! Les textures des affiches ont également été réalisées par mes soins.`,
          type: 'link',
          link: 'https://www.instagram.com/p/C2zQSAPt2QC/',
          tags: ['brutalisme', 'affiches', 'photo'],
          year: 2024,
        },
        {
          title: 'Je vous l\'avais dit que je le ferais.',
          description: '"Je vous l\'avais dit que je le ferais." est une exposition collective à mon initiative. L\'idée était que chaque exposant s\'impose une contrainte, plus ou moins astreignante, afin de développer de nouvelles capacités. Les différentes personnalités ont permis d\'avoir des réalisations très variées. En ce qui concerne ma contrainte, toutes mes œuvres ont été basées sur des polaroids que l\'on retrouve dans l\'édition "La Genèse"',
          type: 'link',
          link: 'https://www.instagram.com/p/CvH4lzuNA6n/',
          tags: ['collectif', 'photo', 'polaroid'],
          year: 2022,
        },

      ]
    },
    {
      title: 'Tatouages',
      description: 'Bien que je me considère toujours en apprentissage, pendant un peu plus d\'un an, j\'ai eu l\'honneur de tatouer au « Cocoon Ink ». Suite à la fermeture du salon susnommé, mon activité a malheureusement dû prendre fin ; cela ne m\'empêche pas d\'avoir hâte de la reprendre dans mon temps libre dès que j\'en aurai les moyens.',
      type: 'link',
      tags: ['tattoo', 'Naïf', 'cocoon ink'],
      link: 'https://www.instagram.com/slxxpyboi.tattoo/',
    }
  ]

  selectedCategory: ProjectItemsModel | null = null;

  selectCategory(item: ProjectItemsModel) {
    if(item.type === 'link' && item.link) {
      window.open(item.link, '_blank');
    } else if(item.type === 'group') {
      this.selectedCategory = item;
    }
  }

  backToMenu() {
    this.selectedCategory = null;
  }

}
