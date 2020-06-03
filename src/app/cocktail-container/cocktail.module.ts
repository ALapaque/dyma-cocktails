import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';

const components = [
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
    FilterPipe,
]

@NgModule({
    declarations: [],
    imports: [
        ...components,
        CommonModule,
    ],
    providers: [],
    exports: [],
})
export class CocktailModule{}