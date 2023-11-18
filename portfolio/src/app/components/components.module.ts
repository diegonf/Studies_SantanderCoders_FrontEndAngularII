import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { HeroComponent } from './hero/hero.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SkillsComponent } from './skills/skills.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';



@NgModule({
  exports: [
    ContatoComponent,
    HeroComponent,
    ProjetosComponent,
    SkillsComponent,
    SobreMimComponent,
  ],
  declarations: [
    ContatoComponent,
    HeroComponent,
    ProjetosComponent,
    SkillsComponent,
    SobreMimComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
