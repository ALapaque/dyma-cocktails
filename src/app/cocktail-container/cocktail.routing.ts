import { RouterModule, Route } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';

const COCKTAIL_ROUTES: Route[] = [
    { path: 'cocktails', component: CocktailContainerComponent, children: [
        { path: '', component: CocktailDetailsComponent },
        { path: 'new', component: CocktailEditComponent },
        { path: ':index', component: CocktailDetailsComponent },
        { path: ':index/edit', component: CocktailEditComponent }
    ]}
];

export const CocktailRouting = RouterModule.forChild(COCKTAIL_ROUTES);