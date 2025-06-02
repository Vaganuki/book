import {Component, ElementRef, inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-links',
  imports: [CommonModule, FormsModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {

  private platformId = inject(PLATFORM_ID);

  @ViewChild('terminalInput', {static: false}) terminalInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('keydown', this.terminalFocus);
    }
  }
  terminalFocus = (event: KeyboardEvent) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Enter' && event.key !== ' ' && event.key!== 'ArrowLeft') {
      this.terminalInput.nativeElement.focus();
    }
  }

  outputHistory: string[] = [
    'Bienvenue dans le Grimoire-Terminal...',
    'Tapez \'help\' pour consulter les arcanes disponibles.',
  ];
  currentInput = '';

  handleCommand() {
    const cmd = this.currentInput.trim().toLowerCase();
    this.outputHistory.push(`✦ ${cmd}`);


    switch (cmd) {
      case 'help':
        this.outputHistory.push('Arcanes disponibles :');
        this.outputHistory.push('→ instagraphisme');
        this.outputHistory.push('→ instattoo');
        this.outputHistory.push('→ linkedin');
        this.outputHistory.push('→ github');
        this.outputHistory.push('→ donation');
        this.outputHistory.push('→ moxfield');
        this.outputHistory.push('→ legacy');
        this.outputHistory.push('→ torpfiolo');
        this.outputHistory.push('→ contact');
        this.outputHistory.push('→ clear');
        break;
      case 'instagraphisme':
        this.outputHistory.push('Ouverture du parchemin visuel : Instagraphisme...');
        setTimeout(() => {
          window.open('https://instagram.com/slxxpyboi', '_blank');
        }, 600);
        break;
      case 'instattoo':
        this.outputHistory.push('Ouverture des glyphes encrés : Instattoo...');
        setTimeout(() => {
          window.open('https://instagram.com/slxxpyboi.tattoo', '_blank');
        }, 600);
        break;
      case 'linkedin':
        this.outputHistory.push('Connexion à la Toile des Âmes Professionnelles : LinkedIn...');
        setTimeout(() => {
          window.open('https://be.linkedin.com/in/hugo-warnotte', '_blank');
        }, 600);
        break;
      case 'github':
        this.outputHistory.push('Invocation des scripts anciens : GitHub...');
        setTimeout(() => {
          window.open('https://github.com/Vaganuki/', '_blank');
        }, 600);
        break;
      case 'donation':
        this.outputHistory.push('Ouverture de l\'autel des donations...');
        setTimeout(() => {
          window.open('https://paypal.me/HugoWa', '_blank');
        }, 600);
        break;
      case 'moxfield':
        this.outputHistory.push('Accès au grimoire des cartes: Moxfield...');
        setTimeout(() => {
          window.open('https://www.moxfield.com/users/Vaganuki', '_blank');
        }, 600);
        break;
      case 'legacy':
        this.outputHistory.push('Consultationdes archives ancestrales: Legacy...');
        setTimeout(() => {
          window.open('/book/legacy/index.html');
        }, 600);
        break;
      case 'torpfiolo':
        this.outputHistory.push('C\'est rigolo comme contrepèterie mais on est déjà dans le portfolio. Petit comique.');
        break
      case 'contact':
        this.outputHistory.push('Ouverture du portail de communication: Contact...');
        setTimeout(() => {
          window.open('mailto:hugo.warnotte@gmail.com', '_blank');
        }, 600);
        break
      case 'clear':
        this.outputHistory = [];
        this.outputHistory.push('Grimoire-Terminal nettoyé. Tapez \'help\' pour consulter les arcanes disponibles.');
        break;
      case 'a':
        for (let i = 0; i < 45; i++) {
          this.outputHistory.push('AAAAAAAAAAAAAAAAAAAAAAA');
        }
        break;
      case 'ping':
        this.outputHistory.push('pong');
        break;
      case 'awoo':
        this.outputHistory.push('awoo');
        break;
      case 'not awoo':
        this.outputHistory.push('awoo anyway');
        break;
      case 'fais le loup':
        this.outputHistory.push('l-l-le le l-l-lOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUP');
        break;
      case 'hlep':
        this.outputHistory.push('Tu veux dire \'help\', non ?');
        break;
        // Ces deux commandes sont un hommage à Aude Beurive, ma merveilleuse formatrice
      case 'pied':
        this.outputHistory.push('Alors on est un kiffeur mon gourmand ?');
        break;
      case 'pieds':
        this.outputHistory.push('Alors on est un GROS kiffeur mon gourmand ?');
        break;
        // Cette prochaine commande est un hommage à Simon Arce, mon cher collègue
      case 'quoi':
        this.outputHistory.push('feur!');
        break;
        // Merci pour tout
      default:
        this.outputHistory.push(`Commande inconnue : ${cmd}`);
        break
    }
    this.currentInput = '';
    setTimeout(() => {
      this.terminalInput?.nativeElement?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
    }, 0);
  }
}
