import {Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-links',
  imports: [CommonModule, FormsModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  @ViewChild('terminalInput', {static: false}) terminalInput!: ElementRef<HTMLInputElement>;

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
        break;
      case 'instattoo':
        this.outputHistory.push('Ouverture des glyphes encrés : Instattoo...');
        break;
      case 'linkedin':
        this.outputHistory.push('Connexion à la Toile des Âmes Professionnelles : LinkedIn...');
        break;
      case 'github':
        this.outputHistory.push('Invocation des scripts anciens : GitHub...');
        break;
      case 'donation':
        this.outputHistory.push('Ouverture de l\'autel des donations...');
        break;
      case 'moxfield':
        this.outputHistory.push('Accès au grimoire des cartes: Moxfield...');
        break;
      case 'legacy':
        this.outputHistory.push('Consultationdes archives ancestrales: Legacy...');
        break;
      case 'torpfiolo':
        this.outputHistory.push('C\'est rigolo comme contrepèterie mais on est déjà dans le portfolio. Petit comique.');
        break
      case 'contact':
        this.outputHistory.push('Ouverture du portail de communication: Contact...');
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
