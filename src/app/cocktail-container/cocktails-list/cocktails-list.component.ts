import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public activeCocktail: Cocktail;

  constructor(
    private _cocktailService: CocktailService,
  ) { }

  ngOnInit(): void {
    this._cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
      this.activeCocktail = cocktails[0];
    });
  }

  selectCocktail(cocktail: Cocktail): void {
    if (!cocktail) return;
    this.activeCocktail = cocktail;
    this._cocktailService.selectCocktail(cocktail);
  }
}
