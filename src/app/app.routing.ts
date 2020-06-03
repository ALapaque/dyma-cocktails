import { Route, RouterModule } from '@angular/router';

const APP_ROUTES: Route[] = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
    { path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) }
]

export const AppRouting = RouterModule.forRoot(APP_ROUTES);