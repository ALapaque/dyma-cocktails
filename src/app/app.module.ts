import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierService } from './shared/services/panier.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';
import { CocktailModule } from './cocktail-container/cocktail.module';
import { SharedModule } from './shared/modules/shared.module';
import { RouterModule } from '@angular/router';

const components = [
  AppComponent,
];

const directives = [
  ActiveDirective
];

const pipes = [];


@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    CocktailModule,
    SharedModule,
  ],
  providers: [
    PanierService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
