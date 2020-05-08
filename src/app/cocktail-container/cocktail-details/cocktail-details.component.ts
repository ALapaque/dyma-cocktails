import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ActiveDirective } from 'src/app/shared/directives/active.directive';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  public index: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cocktailService: CocktailService,
    private _panierService: PanierService,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.index = params.index
      } else {
        this.index = 0;
      }
      this._cocktailService.getCocktail(this.index).subscribe((cocktail: Cocktail) => {
        this.cocktail = cocktail;
      });
    })
  }

  getUrl(): string[] {
    return ['/cocktails', this.index.toString(10), 'edit'];
  }

  addToCart(ingredients: Ingredient[]): void {
    this._panierService.addToCart(ingredients);
  }
}
