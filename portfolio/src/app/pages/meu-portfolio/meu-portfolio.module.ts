import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPortfolioComponent } from './meu-portfolio.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    MeuPortfolioComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MeuPortfolioComponent
  ]
})
export class MeuPortfolioModule { }
