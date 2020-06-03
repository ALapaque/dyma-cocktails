import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const components = [
    HeaderComponent,
];

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        CommonModule,
    ],
})
export class SharedModule {}