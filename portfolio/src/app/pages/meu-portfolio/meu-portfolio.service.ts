import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { curriculo } from 'src/contants/curriculo';
import { CurriculoType } from 'src/types/curriculo';

@Injectable({
  providedIn: 'root'
})
export class MeuPortfolioService {

  constructor() { }

  getCurriculo(): Observable<CurriculoType> {
    // const randomNumber = Math.floor(Math.random() * 11); // Generate random number between 0 and 10

    // if (randomNumber < 2) {
    //   return throwError('Error');
    // } else {
      return of(curriculo);
    // }
  }
}
