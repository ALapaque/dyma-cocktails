import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail('Mojito',
      'https://static.750g.com/images/600-600/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.',
      [
        new Ingredient('Rhum blanc', '4cl'),
        new Ingredient('Sirop de sucre de canne', '2cl'),
        new Ingredient('Feuilles de menthe', '6'),
        new Ingredient('Citron vert', '1/2'),
        new Ingredient('Eau gazeuse', '1'),
        new Ingredient('Glaçons', '10')
      ]),
    new Cocktail('Margarita',
      'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/margarita-2037408/9397186-12-fre-FR/Margarita.jpg',
      'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila ...',
      [
        new Ingredient('Jus de citron vert', '10cl'),
        new Ingredient('Tequilla', '10cl'),
        new Ingredient('Cointreau', '10cl')
      ]),
    new Cocktail('Sour',
      'https://assets.afcdn.com/recipe/20190919/98481_w1024h768c1cx2760cy1840cxt0cyt0cxb5520cyb3680.jpg',
      'Traduit de l\'anglais-Un aigre est une famille traditionnelle de boissons mélangées. Des exemples courants de sours sont la margarita et le side-car. Les sours appartiennent à l\'une des anciennes familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks.',
      [
        new Ingredient('Whisky / Bourbon', '5cl'),
        new Ingredient('Citron', '1'),
        new Ingredient('Sirop de sucre de canne', '2cl')
      ]),
    ]);

    public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() { }

  selectCocktail(cocktail: Cocktail): void {
    this.cocktail.next(cocktail);
  }

  getCocktail(index: number): Cocktail {
    return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail): void {
    console.log(cocktail);
    const cocktails = this.cocktails.value.slice();
    cocktails.push(new Cocktail(cocktail.name, cocktail.img, cocktail.description, cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))));
    this.cocktails.next(cocktails);
  }
}
