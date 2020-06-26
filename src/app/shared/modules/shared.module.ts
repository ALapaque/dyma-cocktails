import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './custom-material.module';


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
        FlexLayoutModule,
        CustomMaterialModule,
    ],
    exports: [
        HeaderComponent,
        CommonModule,
        FlexLayoutModule,
        CustomMaterialModule
    ],
})
export class SharedModule {}