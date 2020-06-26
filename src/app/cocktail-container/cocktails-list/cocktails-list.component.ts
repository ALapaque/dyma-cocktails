import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
  providers: [
    FilterPipe,
  ]
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public activeCocktail: Cocktail;
  public search: string = '';

  constructor(
    private _cocktailService: CocktailService,
  ) { }

  ngOnInit(): void {
    this._cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }

  selectCocktail(cocktail: Cocktail): void {
    if (!cocktail) return;
    this.activeCocktail = cocktail;
    this._cocktailService.selectCocktail(cocktail);
  }
}
