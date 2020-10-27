import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectComponent } from './subject.component';
import { HomeComponent } from '../home/home.component';
import { IndexComponent } from './index/index.component';

const subjectRoutes = [
  {path: '', component: SubjectComponent, 
  children: [
      {path: 'subject', component: IndexComponent},
      {path: 'subject/index', component: IndexComponent},
      {path: 'subject/new', component: NewComponent},
  ]}
];

@NgModule({
    imports: [RouterModule.forChild(subjectRoutes)],
    exports: [RouterModule]
})
export class SubjectRoutingModule {}