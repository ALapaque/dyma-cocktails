import { NgModule } from '@angular/core';
import { PanierComponent } from './panier.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { PanierRouting } from './panier.routing';
import { CommonModule } from '@angular/common';

const components = [
    PanierComponent,
    IngredientsListComponent,
];

const directives = [];

const pipes =  [];

@NgModule({
    declarations: [
        ...components,
        ...directives,
        ...pipes
    ],
    imports: [
        CommonModule,
        PanierRouting,
    ],
    providers: [],
    exports: [],
})
export class PanierModule{}