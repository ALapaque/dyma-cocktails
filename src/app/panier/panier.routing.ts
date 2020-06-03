import { RouterModule, Route } from '@angular/router';
import { PanierComponent } from './panier.component';

const PANIER_ROUTES: Route[] = [
    { path: '', component: PanierComponent}
];

export const PanierRouting = RouterModule.forChild(PANIER_ROUTES);