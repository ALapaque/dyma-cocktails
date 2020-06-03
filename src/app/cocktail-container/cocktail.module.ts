import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { CocktailRouting } from './cocktail.routing';
import { SharedModule } from '../shared/modules/shared.module';

const components = [
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
];

const directives = [];

const pipes = [
    FilterPipe,
];

@NgModule({
    declarations: [
        ...components,
        ...directives,
        ...pipes
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CocktailRouting
    ],
    providers: [],
    exports: [],
})
export class CocktailModule{}