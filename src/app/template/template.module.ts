import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareAComponent } from './share-a/share-a.component';
import { ShareBComponent } from './share-b/share-b.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [

  { path: '', component: TemplateComponent }

]

@NgModule({
  declarations: [
    TemplateComponent,
    ShareAComponent,
    ShareBComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class TemplateModule { }
