import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);
  public cocktailSelected: BehaviorSubject<Cocktail> = new BehaviorSubject(null);

  constructor(
    private _httpClient: HttpClient,
  ) {
    this.initCocktails();
  }

  initCocktails(): void {
    this._httpClient.get<Cocktail[]>('https://dyma-cocktails-efd27.firebaseio.com/cocktails.json').subscribe(cocktails => {
      console.log('cocktails ', cocktails);  
      this.cocktails.next(cocktails);
    });
  }

  selectCocktail(cocktailSelected: Cocktail): void {
    this.cocktailSelected.next(cocktailSelected);
  }

  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter((cocktails: Cocktail[]) => cocktails != null),
      map((cocktails: Cocktail[]) => cocktails[index])
    );
  }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push(new Cocktail(cocktail.name, cocktail.img, cocktail.description, cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))));
    this.cocktails.next(cocktails);
  }

  editCocktail(cocktailEdited: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.findIndex(c => c.name === cocktailEdited.name);
    cocktails[index] = cocktailEdited;
    this.cocktails.next(cocktails);
  }
}
