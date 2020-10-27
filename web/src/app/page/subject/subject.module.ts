import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectRoutingModule } from './subject.routing.module';

import { NewComponent } from './new/new.component';
import { SubjectComponent } from './subject.component';
import { IndexComponent } from './index/index.component';
@NgModule({
    imports: [
        CommonModule,
        SubjectRoutingModule,
        FormsModule,
    ],
    exports: [],
    declarations: [
        SubjectComponent,
        NewComponent,
        IndexComponent
    ],
    providers: [ 
    ],
})
export class SubjectModule { }

