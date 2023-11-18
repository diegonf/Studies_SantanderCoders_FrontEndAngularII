import { Component, Input } from '@angular/core';
import { ApresentacaoType } from 'src/types/curriculo';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() apresentacao?: ApresentacaoType;

  getPrimeiroNome() {
    return this.apresentacao?.nome.split(' ')[0];
  }

  getSobrenome() {
    const index = this.apresentacao?.nome.indexOf(' ');
    return this.apresentacao?.nome.slice(index);
  }
}
